import { useState } from "react";
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
import { messageSchema, sendMessage } from "@/lib/utils";
import { destructiveColor } from "@/constants";
import { toast } from "sonner";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";


dayjs.extend(advancedFormat);

const initialForm = {
  name: "",
  email: "",
  title: "",
  message: "",
};
const initialTouched = {
  name: false,
  email: false,
  title: false,
  message: false
};
const initialErrors = {
  name: "",
  email: "",
  title: "",
  message: ""
};


export default function DialogDemo() {
  const [ open, setOpen ] = useState(false);

  const [ form, setForm ] = useState(initialForm);
  const [ touched, setTouched ] = useState(initialTouched);
  const [ errors, setErrors ] = useState(initialErrors);
  const [ isSending, setIsSending ] = useState(false);


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
    setTouched(initialTouched);
    setErrors(initialErrors);
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
      setTouched(
        Object.keys(initialTouched).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        )
      );
      return;
    }

    const payload = {
      ...result.data,
      time: dayjs().format("dddd Do MMMM YYYY HH:mm"),
    }
    
    setIsSending(true)
    try {
      await sendMessage(payload)

      toast.success("Your message was sent successfully!", {
        style: {
          color: '#00ff00cc'
        },
        position: 'top-center'
      })

      resetForm();
      closeDialog();
    }
    catch (e) {
      console.error(`Error trying to send message: ${e}`);
      toast.error("Could not send the message. Please try again later.", {
        style: {
          color: destructiveColor()
        },
        position: 'bottom-center'
      })
    }
    finally {
      setIsSending(false)
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
      <DialogContent className="sm:max-w-sm w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Send Message</DialogTitle>
          <DialogDescription>
            Your message will be processed within 3 business days.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={ onSubmit }>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">
                Name
                <span className="text-destructive ml-[-0.3em]">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Moon Outlaw"
                value={ form.name }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, name: true }))
                }
                className="placeholder:opacity-75"
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
              <Label htmlFor="email">
                Email
                <span className="text-destructive ml-[-0.3em]">*</span>
              </Label>
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
                className="placeholder:opacity-75"
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
              <Label htmlFor="title">
                Title
                <span className="text-destructive ml-[-0.3em]">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="I'd like to discuss a project."
                value={ form.title }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, title: true }))
                }
                className="placeholder:opacity-75"
              />

              {
                touched.title && errors.title && (
                  <span className="text-destructive text-xs">
                      {errors.title}
                  </span>
                )
              }
            </Field>
            <Field>
              <Label htmlFor="message">
                Message
                <span className="text-destructive ml-[-0.3em]">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Project details...."
                value={ form.message }
                onChange={ handleChange }
                onBlur={
                  () => setTouched((prev) => ({ ...prev, message: true }))
                }
                className="h-32 overflow-auto placeholder:opacity-75"
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
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                disabled={ isSending }
              >Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={ isSending }
            >Send</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}