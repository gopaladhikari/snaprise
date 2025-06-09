import { z } from "zod";

export type EnvType = Readonly<typeof env>;

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

export const env = envSchema.parse({
  firebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  firebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  firebaseStorageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  googleGenaiApiKey: process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY,
  ikEndpoint: process.env.NEXT_PUBLIC_IK_ENDPOINT,
  ikPublicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY,
});
