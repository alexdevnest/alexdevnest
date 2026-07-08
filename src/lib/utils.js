import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { z } from "zod";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { getServiceId, getTemplateId, getPublicKey } from "@constants";


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
    .min(5, "Title is too short.")
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
      getServiceId(),
      getTemplateId(),
      { ...payload },
      { publicKey: getPublicKey() }
    )
  }
  catch (e) {
    if (e instanceof EmailJSResponseStatus) {
      console.error(`EmailJS failed to send message: ${e}`);
      throw e;
    }
    console.error(`An Unexpected problem occured when sending the message: ${e}`);
    throw e;
  }
}