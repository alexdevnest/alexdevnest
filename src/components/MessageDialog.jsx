import { useState } from "react";
import { Button } from "@ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog"
import { Field, FieldGroup } from "@ui/field"
import { Input } from "@ui/input"
import { Textarea } from "@ui/textarea"
import { Label } from "@ui/label"
import { TbSend2 } from "react-icons/tb";



export default function DialogDemo() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    // Logic here later on

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Dialog>
      <form>
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
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Moon Outlaw"
                value={ name }
                onChange={ () => setName(name) }
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="outmoon@gmail.com"
                value={ email }
                onChange={ () => setEmail(email) }
              />
            </Field>
            <Field>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Discuss a project."
                value={ message }
                onChange={ () => setMessage(message) }
                className="h-32 overflow-auto"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={
                (e) => onSubmit(e)
              }
            >Send</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}