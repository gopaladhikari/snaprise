import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  limit,
  startAfter,
  type QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db } from "@/config/firebase";
import type { Project, Photo } from "@/types";

// Projects
export async function createProject(
  userId: string,
  projectData: Omit<
    Project,
    "id" | "userId" | "createdAt" | "updatedAt"
  >
) {
  try {
    const projectRef = await addDoc(collection(db, "projects"), {
      ...projectData,
      userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return projectRef.id;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function updateProject(
  projectId: string,
  projectData: Partial<Project>
) {
  try {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, {
      ...projectData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(projectId: string) {
  try {
    // First, get all photos for this project
    const photosQuery = query(
      collection(db, "photos"),
      where("projectId", "==", projectId)
    );
    const photosSnapshot = await getDocs(photosQuery);

    // Delete all photos and their storage files
    const photoDeletePromises = photosSnapshot.docs.map(
      async (photoDoc) => {
        const photoData = photoDoc.data() as Photo;
        if (photoData.url) {
          // Extract the path from the URL
          const urlPath = photoData.url.split("?")[0];
          const storagePath = urlPath
            .split("/o/")[1]
            ?.replace(/%2F/g, "/");

          if (storagePath) {
            try {
              const storageRef = ref(
                storage,
                decodeURIComponent(storagePath)
              );
              await deleteObject(storageRef);
            } catch (storageError) {
              console.error(
                "Error deleting photo from storage:",
                storageError
              );
              // Continue with deletion even if storage delete fails
            }
          }
        }

        // Delete the photo document
        await deleteDoc(doc(db, "photos", photoDoc.id));
      }
    );

    await Promise.all(photoDeletePromises);

    // Finally, delete the project
    await deleteDoc(doc(db, "projects", projectId));
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

export async function getProject(projectId: string) {
  try {
    const projectDoc = await getDoc(doc(db, "projects", projectId));

    if (!projectDoc.exists()) {
      throw new Error("Project not found");
    }

    return { id: projectDoc.id, ...projectDoc.data() } as Project;
  } catch (error) {
    console.error("Error getting project:", error);
    throw error;
  }
}

export async function getUserProjects(userId: string) {
  try {
    const projectsQuery = query(
      collection(db, "projects"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const projectsSnapshot = await getDocs(projectsQuery);
    return projectsSnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Project
    );
  } catch (error) {
    console.error("Error getting user projects:", error);
    throw error;
  }
}

export async function getPublicProjects(
  lastDoc?: QueryDocumentSnapshot<DocumentData>,
  pageSize = 12
) {
  try {
    let projectsQuery;

    if (lastDoc) {
      projectsQuery = query(
        collection(db, "projects"),
        where("isPublic", "==", true),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    } else {
      projectsQuery = query(
        collection(db, "projects"),
        where("isPublic", "==", true),
        orderBy("createdAt", "desc"),
        limit(pageSize)
      );
    }

    const projectsSnapshot = await getDocs(projectsQuery);
    const lastVisible =
      projectsSnapshot.docs[projectsSnapshot.docs.length - 1];

    const projects = projectsSnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Project
    );

    return {
      projects,
      lastDoc: lastVisible,
      hasMore: projectsSnapshot.docs.length === pageSize,
    };
  } catch (error) {
    console.error("Error getting public projects:", error);
    throw error;
  }
}

// Photos
export async function uploadProjectPhoto(
  userId: string,
  projectId: string,
  file: File,
  notes?: string,
  order = 0
) {
  try {
    // Create a storage reference
    const storageRef = ref(
      storage,
      `users/${userId}/projects/${projectId}/${Date.now()}_${file.name}`
    );

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);

    // Get the download URL
    const url = await getDownloadURL(snapshot.ref);

    // Add the photo to Firestore
    const photoRef = await addDoc(collection(db, "photos"), {
      projectId,
      userId,
      url,
      notes: notes || "",
      order,
      createdAt: serverTimestamp(),
    });

    // If this is the first photo, set it as the cover image
    const projectDoc = await getDoc(doc(db, "projects", projectId));
    const projectData = projectDoc.data() as Project;

    if (!projectData.coverImage) {
      await updateDoc(doc(db, "projects", projectId), {
        coverImage: url,
        updatedAt: serverTimestamp(),
      });
    }

    return { id: photoRef.id, url };
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error;
  }
}

export async function updatePhotoNotes(
  photoId: string,
  notes: string
) {
  try {
    const photoRef = doc(db, "photos", photoId);
    await updateDoc(photoRef, { notes });
  } catch (error) {
    console.error("Error updating photo notes:", error);
    throw error;
  }
}

export async function deletePhoto(photoId: string) {
  try {
    const photoDoc = await getDoc(doc(db, "photos", photoId));

    if (!photoDoc.exists()) {
      throw new Error("Photo not found");
    }

    const photoData = photoDoc.data() as Photo;

    // Delete from storage if URL exists
    if (photoData.url) {
      // Extract the path from the URL
      const urlPath = photoData.url.split("?")[0];
      const storagePath = urlPath
        .split("/o/")[1]
        ?.replace(/%2F/g, "/");

      if (storagePath) {
        try {
          const storageRef = ref(
            storage,
            decodeURIComponent(storagePath)
          );
          await deleteObject(storageRef);
        } catch (storageError) {
          console.error(
            "Error deleting photo from storage:",
            storageError
          );
          // Continue with deletion even if storage delete fails
        }
      }
    }

    // Check if this is the cover image for the project
    const projectDoc = await getDoc(
      doc(db, "projects", photoData.projectId)
    );

    if (projectDoc.exists()) {
      const projectData = projectDoc.data() as Project;

      if (projectData.coverImage === photoData.url) {
        // Find another photo to use as cover
        const photosQuery = query(
          collection(db, "photos"),
          where("projectId", "==", photoData.projectId),
          where("id", "!=", photoId),
          limit(1)
        );

        const photosSnapshot = await getDocs(photosQuery);

        if (!photosSnapshot.empty) {
          const newCoverPhoto =
            photosSnapshot.docs[0].data() as Photo;
          await updateDoc(doc(db, "projects", photoData.projectId), {
            coverImage: newCoverPhoto.url,
            updatedAt: serverTimestamp(),
          });
        } else {
          // No other photos, remove cover image
          await updateDoc(doc(db, "projects", photoData.projectId), {
            coverImage: null,
            updatedAt: serverTimestamp(),
          });
        }
      }
    }

    // Delete the photo document
    await deleteDoc(doc(db, "photos", photoId));
  } catch (error) {
    console.error("Error deleting photo:", error);
    throw error;
  }
}

export async function getProjectPhotos(projectId: string) {
  try {
    const photosQuery = query(
      collection(db, "photos"),
      where("projectId", "==", projectId),
      orderBy("order", "asc"),
      orderBy("createdAt", "asc")
    );

    const photosSnapshot = await getDocs(photosQuery);
    return photosSnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Photo
    );
  } catch (error) {
    console.error("Error getting project photos:", error);
    throw error;
  }
}

export async function updatePhotoOrder(
  photoId: string,
  newOrder: number
) {
  try {
    const photoRef = doc(db, "photos", photoId);
    await updateDoc(photoRef, { order: newOrder });
  } catch (error) {
    console.error("Error updating photo order:", error);
    throw error;
  }
}

export async function setProjectCoverImage(
  projectId: string,
  photoUrl: string
) {
  try {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, {
      coverImage: photoUrl,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error setting cover image:", error);
    throw error;
  }
}
