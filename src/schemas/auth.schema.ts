import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
});

export const loginSchema = emailSchema.extend({
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const registerSchema = loginSchema.extend({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  middleName: z.string().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type EmailSchema = z.infer<typeof emailSchema>;
