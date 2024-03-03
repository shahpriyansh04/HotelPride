import { Car, ChefHat, ParkingSquare, Wifi } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Cardo } from "next/font/google";
import { cn } from "@/lib/utils";
import { cardo, playfair } from "@/pages/_app";

export default function Info() {
  return (
    <div className="xl:px-48 px-12 bg-white py-12 ">
      <div className="flex-1 flex-col space-y-6  h-full">
        <div className="flex-1">
          <h1 className={`text-3xl font-bold text-center ${cardo.className}`}>
            Welcome to Hotel Pride
          </h1>
          <p className={`mt-6 text-lg text-center ${playfair.className}`}>
            Hotel Pride, is just the answer to every business traveler’s need.
            Located in the happening suburb of Bhandup, the hotel has the
            advantage of being situated, just 10 minutes away from the business
            district of Powai, 20 minutes drive from the domestic and
            international airports, a kilometer from the Eastern Express
            Highway, walking distance from the suburban Bhandup Railway Station.
          </p>
        </div>
      </div>
    </div>
  );
}
