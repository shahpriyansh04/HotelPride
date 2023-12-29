import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 py-10 w-full lg:px-12 h-16 flex items-center bg-white shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <HotelIcon className="h-6 w-6" />
        <span className="mx-2 text-2xl font-semibold">Hotel Pride</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-lg font-medium hover:underline underline-offset-4"
          href="/rooms"
          prefetch
        >
          Rooms
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
