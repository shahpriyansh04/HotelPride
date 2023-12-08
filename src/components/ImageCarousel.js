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
        <div>
          <img src="https://picsum.photos/640/300" className="h-[45rem]" />
        </div>
        <div>
          <img src="https://picsum.photos/640/300" className="h-[45rem]" />
        </div>
        <div>
          <img src="https://picsum.photos/640/300" className="h-[45rem]" />
        </div>
      </Carousel>
    
    )
}