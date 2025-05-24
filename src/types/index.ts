import type { User as FirebaseUser } from "firebase/auth";

export interface User extends FirebaseUser {
  firstName: string;
  lastName: string;
  middleName: string;
  bio: string;
  businessName: string;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string;
  location?: string;
  category: string;
  tags: string[];
  isPublic: boolean;
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Photo {
  id: string;
  projectId: string;
  userId: string;
  url: string;
  notes?: string;
  order: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  reviewerId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Trade {
  id: string;
  name: string;
  icon?: string;
}

export type AuthStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated";
