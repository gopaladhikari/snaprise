import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email(),
});

export const loginSchema = emailSchema.extend({
  password: z.string().min(8),
});

export const registerSchema = loginSchema.extend({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  middleName: z.string().min(2).optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type EmailSchema = z.infer<typeof emailSchema>;
