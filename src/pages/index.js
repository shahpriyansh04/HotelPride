  
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Main from "@/components/Main"

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-screen items-center w-full">
     <Navbar />
     <Main  />
      <Footer/>
    </div>
  )
}

