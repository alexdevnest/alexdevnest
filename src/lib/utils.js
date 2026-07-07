import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { z } from "zod";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const messageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name is too short.")
    .max(35, "Name cannot exceed 35 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(5, "Message is too short.")
    .max(255, "Message cannot exceed 255 characters.")
});