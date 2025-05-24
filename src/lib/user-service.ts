import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  type QueryDocumentSnapshot,
  type DocumentData,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import type { Review, User } from "@/types";
import { db } from "@/config/firebase";

export async function getUserProfile(userId: string) {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));

    if (!userDoc.exists()) {
      throw new Error("User not found");
    }

    return { uid: userDoc.id, ...userDoc.data() } as User;
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
}

export async function getPublicProfiles(
  lastDoc?: QueryDocumentSnapshot<DocumentData>,
  pageSize = 12,
  filters?: {
    trade?: string;
    location?: string;
    searchTerm?: string;
  }
) {
  try {
    let usersQuery = query(
      collection(db, "users"),
      where("isPublic", "==", true)
    );

    // Apply filters
    if (filters?.trade) {
      usersQuery = query(
        usersQuery,
        where("trades", "array-contains", filters.trade)
      );
    }

    if (filters?.location) {
      // This is a simplified approach. In a real app, you might want to use geolocation
      usersQuery = query(
        usersQuery,
        where("city", "==", filters.location)
      );
    }

    // Add ordering and pagination
    usersQuery = query(usersQuery, orderBy("createdAt", "desc"));

    if (lastDoc) {
      usersQuery = query(
        usersQuery,
        startAfter(lastDoc),
        limit(pageSize)
      );
    } else {
      usersQuery = query(usersQuery, limit(pageSize));
    }

    const usersSnapshot = await getDocs(usersQuery);
    const lastVisible =
      usersSnapshot.docs[usersSnapshot.docs.length - 1];

    let users = usersSnapshot.docs.map(
      (doc) => ({ uid: doc.id, ...doc.data() }) as User
    );

    // Apply search term filter client-side (not ideal, but Firestore doesn't support text search)
    if (filters?.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      users = users.filter(
        (user) =>
          user.displayName?.toLowerCase().includes(searchLower) ||
          user.businessName?.toLowerCase().includes(searchLower) ||
          user.bio?.toLowerCase().includes(searchLower)
      );
    }

    return {
      users,
      lastDoc: lastVisible,
      hasMore: usersSnapshot.docs.length === pageSize,
    };
  } catch (error) {
    console.error("Error getting public profiles:", error);
    throw error;
  }
}

export async function updateUserVisibility(
  userId: string,
  isPublic: boolean
) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      isPublic,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating user visibility:", error);
    throw error;
  }
}

// Reviews
export async function createReview(
  userId: string,
  reviewerId: string,
  reviewerName: string,
  rating: number,
  comment: string
) {
  try {
    const reviewRef = await collection(db, "reviews");
    const newReview = {
      userId,
      reviewerId,
      reviewerName,
      rating,
      comment,
      createdAt: serverTimestamp(),
    };

    await reviewRef.add(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
}

export async function getUserReviews(userId: string) {
  try {
    const reviewsQuery = query(
      collection(db, "reviews"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const reviewsSnapshot = await getDocs(reviewsQuery);
    return reviewsSnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as Review
    );
  } catch (error) {
    console.error("Error getting user reviews:", error);
    throw error;
  }
}

export async function getAvailableTrades() {
  try {
    const tradesQuery = query(
      collection(db, "trades"),
      orderBy("name", "asc")
    );
    const tradesSnapshot = await getDocs(tradesQuery);

    return tradesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting trades:", error);
    throw error;
  }
}
