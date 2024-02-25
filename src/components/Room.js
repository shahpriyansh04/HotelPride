import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Room() {
  const pathname = usePathname();
  return (
    <div className={cn("xl:px-48 px-12 py-12", pathname && "bg-white")}>
      <h1
        className={cn(
          "text-center font-bold",
          pathname === "/rooms" && "text-3xl md:text-5xl",
          pathname === "/" && "text-3xl"
        )}
      >
        Rooms
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <RoomCard
          title="Non AC Room"
          link="non-ac"
          image="/NON AC ROOMS/1.jpeg"
          description="Enjoy a comfortable stay with complimentary WiFi, a king-size bed, LED TV, and a convenient desk and chair setup"
        />
        <RoomCard
          title="Deluxe Room"
          link={"deluxe"}
          image="/DELUXE ROOM/1.jpeg"
          description="Experience a touch of luxury with spacious accommodations and modern amenities. Perfect for a relaxing getaway or business trip including complimentary WiFi, a king-size bed, LED TV, and a dedicated work area with desk and chair."
        />
        <RoomCard
          title="Executive Room"
          link="executive"
          image="/EXECUTIVE ROOM/2.jpeg"
          description="Ideal for extended stays, our Executive Rooms offer a harmonious blend of luxury and functionality. Enjoy complimentary high-speed WiFi, a lavish king-size bed, premium LED TV, and a spacious workspace with an ergonomic desk and chair, creating the perfect environment for both productivity and relaxation during your extended visit."
        />
      </div>
    </div>
  );
}

function RoomCard({ title, image, description, link }) {
  return (
    <Card className="">
      <img src={image} alt="room" className="p-0 rounded-t-md " />
      <CardHeader className="">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500 -mt-4 truncate">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex  w-full">
        <Link href={`/room/${link}`} className="w-full">
          <Button className="w-full bg-[#A59481]">View More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
