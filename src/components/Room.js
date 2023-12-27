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
    <div className="px-48 py-24">
      <h1
        className={cn(
          "text-center font-bold",
          pathname === "/rooms" && "text-5xl",
          pathname === "/" && "text-3xl"
        )}
      >
        Rooms
      </h1>
      <div className="grid grid-cols-3 gap-12 mt-10">
        <RoomCard
          title="Non AC Room"
          image="https://picsum.photos/640/300"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
        />
        <RoomCard
          title="Deluxe Room"
          image="https://picsum.photos/640/300"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
        />
        <RoomCard
          title="Executive Room"
          image="https://picsum.photos/640/300"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem."
        />
      </div>
    </div>
  );
}

function RoomCard({ title, image, description }) {
  return (
    <Card className="">
      <img src={image} alt="room" className="p-0 rounded-t-md" />
      <CardHeader className="">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500 -mt-4">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex  w-full">
        <Link href="/room/deluxe" className="w-full">
          <Button className="w-full">View More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
