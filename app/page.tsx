import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"


function page() {
  return (
    <div className="bg-[#FAFAFA] w-screen h-screen container mx-auto">
      <Navbar />
      <Hero />
    </div>
  )
}

export default page