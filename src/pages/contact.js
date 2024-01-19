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
import { useToast } from "@/components/ui/use-toast";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const handleClick = async () => {
    const promise = fetch("/api/mail");

    toast.promise(promise, {
      loading: "Sending...",
      success: "Sent",
      error: "Error",
    });
  };

  return (
    <div>
      <Toaster position="bottom-center" />
      <div className="md:flex-row flex-col flex items-start  justify-center py-12 md:py-28  px-6 md:space-x-20 md:space-y-0 space-y-12 md:max-w-4xl mx-auto">
        <Card className="w-full p-5">
          <h1 className="text-2xl font-semibold text-center">Details</h1>
          <div className="flex flex-col mt-12 gap-5">
            <div>
              <p className="text-xl font-regular">Phone</p>
              <div className="flex flex-col">
                <a href="tel:+919819914047" className="font-semibold text-lg">
                  +91 9819914047
                </a>
                <a href="tel:+919819914047" className="font-semibold text-lg">
                  022 61277302
                </a>
              </div>
            </div>
            <div>
              <p className="text-xl font-regular">Email</p>
              <a
                href="mailto:hotelpride05@gmail.com"
                className="font-semibold text-lg"
              >
                hotelpride05@gmail.com
              </a>
            </div>
            <div className="font-regular text-xl">
              Timings:
              <p className="text-lg font-semibold">Check In : 12:00 PM</p>
              <p className="text-lg font-semibold">Check Out : 11:00 AM</p>
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">Contact us</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div>
              <Label>Name</Label>
              <Input type="text" placeholder="John Doe" className="w-full" />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full"
              />
            </div>
            <div>
              <Label>Phone number</Label>
              <Input
                type="tel"
                placeholder="+91 1234567890"
                className="w-full"
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                type="textarea"
                placeholder="Enter your message here"
                className="w-full resize-none"
              />
            </div>
          </CardContent>
          <CardDescription className="pb-2 text-center text-xs">
            We will get back to you as soon as possible.
          </CardDescription>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" onClick={handleClick}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
