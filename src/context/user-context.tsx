"use client";

import { firebaseAuth } from "@/config/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useMemo, useState } from "react";

type UserContext = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  isAuthenticated: boolean;
};

export const UserContext = createContext<UserContext>({
  user: undefined,
  setUser: () => {},
  isAuthenticated: false,
});

export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  onAuthStateChanged(firebaseAuth, (user) => {
    console.log(user);
    if (user) setUser(user);
    else setUser(undefined);
  });

  const value = useMemo(
    () => ({
      user,
      setUser,
      isAuthenticated: !!user,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
