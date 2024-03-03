export default function Gallery() {
  return (
    <div className="xl:px-48 px-12 py-12">
      <h1 className="text-3xl font-semibold text-center my-6">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-12">
        <img src="/LOBBY/7.jpeg" />
        <img src="/LOBBY/8.jpeg" />
        <img src="/LOBBY/10.jpeg" />
        {/* <img src="/LOBBY/11.jpg" /> */}
        <img src="/LOBBY/2.jpeg" />
        <img src="/LOBBY/3.jpeg" />
        <img src="/CAROUSEL/1.jpeg" />

        <img src="/LOBBY/5.jpeg" />
        <img src="/EXECUTIVE ROOM/1.jpeg" />
        <img src="/EXECUTIVE ROOM/2.jpeg" />
        <img src="/EXECUTIVE ROOM/3.jpeg" />
        <img src="/DELUXE ROOM/1.jpeg" />
        <img src="/DELUXE ROOM/3.jpeg" />
        <img src="/NON AC ROOMS/1.jpeg" />
        <img src="/NON AC ROOMS/2.jpeg" />

        <img src="/EXECUTIVE ROOM/4.jpeg" />
      </div>
    </div>
  );
}
