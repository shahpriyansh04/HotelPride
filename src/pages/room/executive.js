import ImageCarousel from "@/components/ImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

export default function Executive() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 sm:h-[15rem] lg:h-[35rem] justify-items-start px-12 xl:px-60 py-16 gap-12">
      <div className="w-full  h-full">
        <Carousel
          autoPlay
          showThumbs={true}
          showStatus={false}
          showArrows
          infiniteLoop
        >
          <div className="">
            <img src="/EXECUTIVE ROOM/2.jpeg" />
          </div>
          <div className="">
            <img src="/EXECUTIVE ROOM/1.jpeg" />
          </div>
          <div className="">
            <img src="/EXECUTIVE ROOM/3.jpeg" />
          </div>
          <div className="">
            <img src="/EXECUTIVE ROOM/4.jpeg" />
          </div>
        </Carousel>
      </div>
      <div className="w-full lg:h-[35rem] sm:h-[15rem] flex flex-col   justify-between">
        <div>
          <h1 className="text-4xl font-bold">Executive Room</h1>

          <p className="text-md text-muted-foreground mt-12">
            Ideal for extended stays, our Executive Rooms offer a harmonious
            blend of luxury and functionality. Enjoy complimentary high-speed
            WiFi, a lavish king-size bed, premium LED TV, and a spacious
            workspace with an ergonomic desk and chair, creating the perfect
            environment for both productivity and relaxation during your
            extended visit.
          </p>
        </div>
        <div className="flex flex-col  mt-6 gap-5">
          <p className="font-semibold text-xl">Room Highlights:</p>
          <ul className="list-disc">
            <li>King-sized bed</li>
            <li>Safe</li>
            <li>Work desk</li>
            <li>Complimentary Wi-Fi</li>
          </ul>
        </div>

        <div className="flex items-center justify-between mt-20">
          <p className="text-3xl font-bold">₹4000</p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
