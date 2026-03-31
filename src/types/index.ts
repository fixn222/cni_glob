import { z } from "zod"

export const feedBackFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  feedback: z.string().min(5, "Feedback must be at least 5 characters"),
})