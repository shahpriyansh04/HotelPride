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
          image="/NON AC ROOMs/1.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
        />
        <RoomCard
          title="Deluxe Room"
          link={"deluxe"}
          image="/DELUXE ROOM/1.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
        />
        <RoomCard
          title="Executive Room"
          link="executive"
          image="/EXECUTIVE ROOM/2.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
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
        <CardDescription className="text-gray-500 -mt-4">
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
