import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Contact us</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div>
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe" className="w-72" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="abc@gmail.com" className="w-72" />
          </div>
          <div>
            <Label>Phone number</Label>
            <Input type="tel" placeholder="+91 1234567890" className="w-72" />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea
              type="textarea"
              placeholder="Enter your message here"
              className="w-72 resize-none"
            />
          </div>
        </CardContent>
        <CardDescription className="pb-2 text-center">
          We will get back to you as soon as possible.
        </CardDescription>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
