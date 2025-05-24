"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import type { AuthStatus, User } from "@/types";
import { auth, db } from "@/config/firebase";

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  {
    status: "loading",
    user: null,
  }
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        if (firebaseUser) {
          const userDoc = await getDoc(
            doc(db, "users", firebaseUser.uid)
          );
          if (userDoc.exists()) {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email!,
              ...userDoc.data(),
            } as User);
          } else {
            setUser(null);
          }
          setStatus("authenticated");
        } else {
          setUser(null);
          setStatus("unauthenticated");
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const value = useMemo(() => {
    return {
      user,
      status,
    };
  }, [user, status]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
