import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@ui/button"
import {
  Dialog, DialogClose, DialogContent,
  DialogDescription, DialogFooter, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@ui/dialog"
import { Field, FieldGroup } from "@ui/field"
import { Input } from "@ui/input"
import { Textarea } from "@ui/textarea"
import { Label } from "@ui/label"
import { TbSend2 } from "react-icons/tb";
import { messageSchema } from "@/lib/utils";


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name, value) => {
    const result = messageSchema.shape[name].safeParse(value);

    setErrors((prev) => ({
        ...prev,
        [name]: result.success ? "" : result.error.issues[0].message,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
        ...prev,
        [name]: value,
    }));

    validateField(name, value);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSendError("");
  };

  const closeDialog = () => setOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = messageSchema.safeParse(form);

    if (!result.success) {
        const fieldErrors = {};

        result.error.issues.forEach((issue) => {
            fieldErrors[issue.path[0]] = issue.message;
        });

        setErrors(fieldErrors);
        return;
    }

    setSendError("");
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      resetForm();
      closeDialog();
    } catch {
      setSendError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={
        (isOpen) => {
          if (!isOpen) {
            resetForm();
          }

          setOpen(isOpen);
        }
      }
    >
      <DialogTrigger asChild>
        <Button
          className="msg-btn"
        >
          Send me a message
          <TbSend2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-[500px]:max-w-md sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Send Message</DialogTitle>
          <DialogDescription>
            Your message will be processed within 3 business days.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={ onSubmit }>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Moon Outlaw"
                value={ form.name }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, name: true }))
                }
              />

              {
                touched.name && errors.name && (
                  <span className="text-destructive text-xs">
                      {errors.name}
                  </span>
                )
              }
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="outmoon@gmail.com"
                value={ form.email }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, email: true }))
                }
              />

              {
                touched.email && errors.email && (
                  <span className="text-destructive text-xs">
                      {errors.email}
                  </span>
                )
              }
            </Field>
            <Field>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Discuss a project."
                value={ form.message }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, message: true }))
                }
                className="h-32 overflow-auto"
              />

              {
                touched.message && errors.message && (
                  <span className="text-destructive text-xs">
                      {errors.message}
                  </span>
                )
              }
            </Field>
          </FieldGroup>

          {
            sendError && (
              <span className="text-destructive text-xs mt-3 block">
                {sendError}
              </span>
            )
          }

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline" disabled={ isSending }>Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={ isSending }
            >{ isSending ? "Sending..." : "Send" }</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}