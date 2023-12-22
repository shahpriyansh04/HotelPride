import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

export default function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows
      infiniteLoop
    >
      <div className="h-[45rem] ">
        <img src="https://picsum.photos/640/300" />
      </div>
      <div className="h-[45rem] ">
        <img src="https://picsum.photos/640/300" />
      </div>
      <div className="h-[45rem] ">
        <img src="https://picsum.photos/640/300" />
      </div>
    </Carousel>
  );
}
