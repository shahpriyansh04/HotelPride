import { Car, ChefHat, ParkingSquare, Wifi } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Info() {
  return (
    <div className="px-48   ">
      <div className="mt-12 flex-1 flex  h-full">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Welcome to Hotel Pride</h1>
          <p className="mt-6 text-lg">
            Hotel Pride, is just the answer to every business traveler’s need.
            Located in the happening suburb of Bhandup, the hotel has the
            advantage of being situated, just 10 minutes away from the business
            district of Powai, 20 minutes drive from the domestic and
            international airports, a kilometer from the Eastern Express
            Highway, walking distance from the suburban Bhandup Railway Station.
          </p>
        </div>

        <div className="flex-1 ">
          <h1 className="text-3xl font-bold text-center">Our Amenities</h1>
          <div className="grid grid-cols-2 gap-y-10 justify-items-start mt-6 ml-12">
            <div className="flex items-center gap-4">
              <ParkingSquare height={""} className="w-8 aspect-square " />
              <p className="text-xl">Free Parking</p>
            </div>
            <div className="flex items-center gap-4">
              <Car height={""} className="w-8 aspect-square " />
              <p className="text-xl">Valet Parking available</p>
            </div>{" "}
            <div className="flex items-center gap-4">
              <Wifi height={""} className="w-8 aspect-square " />
              <p className="text-xl">Complimentary Wi-Fi</p>
            </div>{" "}
            <div className="flex items-center gap-4">
              <ChefHat height={""} className="w-8 aspect-square " />
              <p className="text-xl">In-house kitchen</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="mt-20 flex-1  flex  gap-6  items-center justify-between ">
        <Card className="w-[350px]  ">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Phone: +91 9819914047</p>
            <p>Email:hotelpride05@gmail.com</p>
          </CardContent>
        </Card>
        <Card className="w-[350px]  ">
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>

          <CardContent>
            <p>L.B.S. Marg, Bhandup West,</p>
            <p>Mumbai – 400 078</p>
          </CardContent>
        </Card>
        <Card className="w-[350px]  ">
          <CardHeader>
            <CardTitle>Timings</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Check In : 12PM</p>
            <p>Check Out : 12PM</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
