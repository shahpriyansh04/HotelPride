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
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
}

function RoomCard() {
  return (
    <Card className="">
      <img
        src="https://picsum.photos/640/300"
        alt="room"
        className="p-0 rounded-t-md"
      />
      <CardHeader className="">
        <CardTitle className="text-2xl">Room 1</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500 -mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex  w-full">
        <Button className="w-full">
          <Link href="/room/deluxe">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
