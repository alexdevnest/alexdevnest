import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { z } from "zod";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "sonner";
import {
  destructiveColor, PUBLIC_KEY,
  SERVICE_ID, TEMPLATE_ID
} from "@/constants";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const messageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name is too short.")
    .max(35, "Name cannot exceed 35 characters."),

  email: z.email("Please enter a valid email address."),

  title: z
    .string()
    .trim()
    .min(3, "Title is to short.")
    .max(50, "Title cannot exceed 50 characters."),

  message: z
    .string()
    .trim()
    .min(5, "Message is too short.")
    .max(255, "Message cannot exceed 255 characters.")
});

export const sendMessage = async (payload) => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { ...payload },
      PUBLIC_KEY
    )
    toast.success("Your message was sent successfully!", {
      style: {
        color: '#00ff00cc'
      },
      position: 'top-center'
    })
  }
  catch (e) {
    if (e instanceof EmailJSResponseStatus) {
      console.error(`EmailJS failed: ${e}`);
      toast.error("Could not send the message. Please try again later.", {
        style: {
          color: destructiveColor()
        },
        position: 'bottom-right'
      })
      return;
    }
    console.error(`An Unexpected problem occured when sending the message: ${e}`);
    toast.error("Could not send the message. Please try again later.", {
      style: {
        color: destructiveColor()
      },
      position: 'bottom-center'
    })
  }
}