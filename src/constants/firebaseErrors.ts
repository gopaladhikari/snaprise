export type FirebaseErrorCode = keyof typeof firebaseErrorCodes;

export const somethingWentWrong = "Something went wrong";

export const firebaseErrorCodes = {
  "auth/invalid-credential": "Invalid email or password",
  "auth/email-already-in-use": "Email already in use",
};
