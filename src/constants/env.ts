import { z } from "zod";

const envSchema = z.object({
  firebaseApiKey: z.string().min(1),
  firebaseAuthDomain: z.string().min(1),
  firebaseProjectId: z.string().min(1),
  firebaseStorageBucket: z.string().min(1),
  firebaseMessagingSenderId: z.string().min(1),
  firebaseAppId: z.string().min(1),
  googleGenaiApiKey: z.string().min(1),
  ikEndpoint: z.string().min(1),
  ikPublicKey: z.string().min(1),
});

const parsedEnv = envSchema.parse({
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: process.env.FIREBASE_APP_ID,
  googleGenaiApiKey: process.env.GOOGLE_GENAI_API_KEY,
  ikEndpoint: process.env.IK_ENDPOINT,
  ikPublicKey: process.env.IK_PUBLIC_KEY,
});

export const env = parsedEnv as Readonly<typeof parsedEnv>;
