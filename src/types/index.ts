// Auth and feedback schemas: keep landing-page dialogs and auth forms visually aligned while validating inputs.
import { z } from "zod"

export const feedBackFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  feedback: z.string().min(5, "Feedback must be at least 5 characters"),
})

export const signInFormSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const signUpFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })

export const forgotPasswordFormSchema = z.object({
  email: z.email("Enter a valid email address"),
})

export const verifyEmailFormSchema = z.object({
  otp: z.string().length(6, "Enter the 6-digit code"),
})

export const resetPasswordFormSchema = z
  .object({
    otp: z.string().length(6, "Enter the 6-digit code"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })
