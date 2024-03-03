import { Car, ChefHat, ParkingSquare, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MdOutlineRoomService } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";

export default function Amenities() {
  return (
    <div className="xl:px-48 px-12 py-12">
      <h1 className="text-3xl font-bold text-center">Our Amenities</h1>
      <div className=" grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-3 mt-6 w-full gap-y-10">
        <div className="flex items-center gap-4 ">
          <ParkingSquare height={""} className="w-8 aspect-square " />
          <p className="text-xl">Free Parking</p>
        </div>
        <div className="flex items-center gap-4 ">
          <Car height={""} className="w-8 aspect-square " />
          <p className="text-xl">Valet Parking available</p>
        </div>{" "}
        <div className="flex items-center gap-4 ">
          <Wifi height={""} className="w-8 aspect-square " />
          <p className="text-xl">Complimentary Wi-Fi</p>
        </div>{" "}
        <div className="flex items-center gap-4 ">
          <ChefHat height={""} className="w-8 aspect-square " />
          <p className="text-xl">In-house kitchen</p>
        </div>
        <div className="flex items-center gap-4 ">
          <MdOutlineFreeBreakfast className="w-8 h-8 aspect-square" />

          <p className="text-xl">Breakfast</p>
        </div>{" "}
        <div className="flex items-center gap-4 ">
          <MdOutlineRoomService className="w-8 h-8 aspect-square" />
          <p className="text-xl">In-room dining</p>
        </div>{" "}
        <div className="flex items-center gap-4 ">
          <Ri24HoursLine height={""} className="w-8 h-8 aspect-square" />
          <p className="text-xl">24/7 Always open</p>
        </div>
        <div className="flex items-center gap-4 ">
          <img src="butler.png" alt="" className="w-8 h-8 " />
          <p className="text-xl">Room service</p>
        </div>
      </div>
      <div className="mt-20 flex-1  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid  gap-6  items-center justify-between ">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Phone: +91 9819914047</p>
            <p>Email: hotelpride05@gmail.com</p>
          </CardContent>
        </Card>
        <Card className="w-[300px]  ">
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>

          <CardContent>
            <p>L.B.S. Marg, Bhandup West,</p>
            <p>Mumbai - 400 078</p>
          </CardContent>
        </Card>
        <Card className="w-[300px]  ">
          <CardHeader>
            <CardTitle>Timings</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Check In : 12:00 PM</p>
            <p>Check Out : 11:00 AM</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
