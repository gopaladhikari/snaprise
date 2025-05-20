import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { env } from "@/constants/env";

const firebaseConfig: FirebaseOptions = {
  apiKey: env.firebaseApiKey,
  authDomain: env.firebaseAuthDomain,
  projectId: env.firebaseProjectId,
  storageBucket: env.firebaseStorageBucket,
  messagingSenderId: env.firebaseMessagingSenderId,
  appId: env.firebaseAppId,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const firebaseAuth = getAuth(app);

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    console.log({ user });
    console.log("User is signed in");
  } else {
    console.log("User is signed out");
  }
});

export { firebaseAuth, db };
