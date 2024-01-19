import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

export default function ImageCarousel() {
  return (
    <Carousel
      interval={3000}
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows
      infiniteLoop
    >
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/1.jpeg" className="h-[45rem] object-cover" />
      </div>
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/2.jpeg" className="h-[45rem] object-cover" />
      </div>
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/3.jpeg" className="h-[45rem] object-cover" />
      </div>
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/4.jpeg" className="h-[45rem] object-cover" />
      </div>
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/5.JPG" className="h-[45rem] object-cover" />
      </div>
      <div className="h-[45rem] ">
        <img src="/CAROUSEL/6.jpeg" className="h-[45rem] object-cover" />
      </div>
    </Carousel>
  );
}
