import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <div
      className="h-[85vh] w-full border-b border-ui-border-base  relative bg-ui-bg-subtle"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/djgmw3i6f/image/upload/t_Banner 16:9/v1728827333/Frame_4_yur69t.png')",
        backgroundPosition: "center", // Positions the image in the center
        backgroundSize: "cover", // Ensures the image covers the div without distortion
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-start small:p-20 gap-6">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 pl-7 md:pl-10   text-white">
          {/* Top Content */}
          <h3 className="text-large-regular md:text-xl-regular opacity-75 mb-2">
            Secure Your World
          </h3>

          {/* Middle Largest Content */}
          <h1 className="text-3xl md:text-5xl border-l-2 pl-4 max-w-[298px] md:max-w-[600px] -ml-2 font-bold mb-4">
            Advanced Security Solutions
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg max-w-[300px] md:max-w-[450px] mb-6">
            Ensure peace of mind with every security technology, from
            surveillance systems to access control.
          </p>

          {/* Button */}
          <Link
            href="/store"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black p-0.5 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <span className="relative flex items-center rounded-md px-5 py-2.5">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <span className="relative">Shop Now</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
