import ImageCarousel from "./ImageCarousel";
import Info from "./Info";
import Room from "./Room";

export default function Main() {
  return (
    <div className="w-full  py-1 2 px -12">
      <ImageCarousel />
      <Info />
      <Room />
    </div>
  );
}
