import { cn } from "@/lib/utils";
import { CrossIcon, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const handleClick = () => {
    navbarRef.current.style.setProperty("width", "100%");
    setIsOpen(true);
  };
  return (
    <header className="px-4 py-12 w-full lg:px-12 h-16 flex items-center justify-between  bg-white text-[#926f34] shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <img src="logo.png" alt="" className="w-24 h-20" />
        {/* <span className="mx-2 text-2xl font-semibold">Hotel Pride</span> */}
      </Link>
      <MenuIcon onClick={handleClick} className="sm:hidden" />
      <nav className="ml-auto  gap-4 sm:gap-6 hidden sm:flex">
        <Link
          className="text-lg font-medium hover:underline underline-offset-4"
          href="/rooms"
          prefetch
        >
          Rooms
        </Link>

        <Link
          className="text-lg font-medium hover:underline underline-offset-4"
          href="/gallery"
          prefetch
        >
          Gallery
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4"
          href="/location"
          prefetch
        >
          Location
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4"
          href="/contact"
          prefetch
        >
          Contact
        </Link>
      </nav>

      <div
        ref={navbarRef}
        className={cn(
          "hidden absolute top-0 z-[99999] left-0 bg-gray-100 w-[calc(100%-240px)] transition-all ease-in-out duration-300 ",
          isOpen && "h-screen block transition-all ease-in-out duration-300"
        )}
      >
        <X
          className="absolute top-0 right-0 h-6 w-6 m-6 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className="flex py-20 gap-8 flex-col items-center">
          <Link
            className="text-2xl font-medium hover:underline underline-offset-4"
            href="/"
            onClick={() => {
              setIsOpen(false);
            }}
            prefetch
          >
            Home
          </Link>
          <Link
            className="text-2xl font-medium hover:underline underline-offset-4"
            href="/rooms"
            onClick={() => {
              setIsOpen(false);
            }}
            prefetch
          >
            Rooms
          </Link>
          <Link
            className="text-2xl font-medium hover:underline underline-offset-4"
            href="/gallery"
            onClick={() => {
              setIsOpen(false);
            }}
            prefetch
          >
            Gallery
          </Link>

          <Link
            className="text-2xl font-medium hover:underline underline-offset-4"
            href="/location"
            onClick={() => {
              setIsOpen(false);
            }}
            prefetch
          >
            Location
          </Link>
          <Link
            className="text-2xl font-medium hover:underline underline-offset-4"
            href="/contact"
            onClick={() => {
              setIsOpen(false);
            }}
            prefetch
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}
