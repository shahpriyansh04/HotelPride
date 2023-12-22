import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex justify-center py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © Hotel Pride. All rights reserved.
      </p>
    </footer>
  );
}
