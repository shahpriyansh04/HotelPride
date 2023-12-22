import ImageCarousel from "@/components/ImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

export default function Deluxe() {
  return (
    <div className="grid grid-cols-2 h-[35rem] justify-items-start  px-60 py-16 gap-12">
      <div className="w-full  h-full">
        <Carousel
          autoPlay
          showThumbs={true}
          showStatus={false}
          showArrows
          infiniteLoop
        >
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
          <div className="h-[35rem] ">
            <img src="https://picsum.photos/350" />
          </div>
        </Carousel>
      </div>
      <div className="w-full  flex flex-col h-[35rem]  justify-between">
        <div>
          <h1 className="text-4xl font-bold">Deluxe Room</h1>

          <p className="text-md text-muted-foreground mt-12">
            Our Deluxe rooms are spacious and offer views of the city. They come
            equipped with a king-sized bed, a work desk, a mini fridge, and a
            safe for your valuables.
          </p>
        </div>
        <div className="flex flex-col  mt-6 gap-5">
          <p className="font-semibold text-xl">Room Highlights:</p>
          <ul className="list-disc">
            <li>King-sized bed</li>
            <li>Mini fridge</li>
            <li>Safe</li>
            <li>Work desk</li>
            <li>Complimentary breakfast</li>
            <li>Complimentary Wi-Fi</li>
          </ul>
        </div>

        <div className="flex items-center justify-between mt-20">
          <p className="text-3xl font-bold">₹4000</p>
          <Button size="lg" className="text-lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
