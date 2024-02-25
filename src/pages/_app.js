import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Cardo } from "next/font/google";
import { Playfair } from "next/font/google";
export const cardo = Cardo({
  subsets: ["latin"],
  weight: "700",

  variable: "--font-cardo",
});
export const playfair = Playfair({
  subsets: ["latin"],
  weight: "700",

  variable: "--font-playfair",
});
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
