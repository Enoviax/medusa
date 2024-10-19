import { Camera, Smartphone, Video, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Lock } from "lucide-react"

const Categories = () => {
  return (
    <section className="md:p-20 px-2 pt-16 flex flex-col gap-12 items-center border-b pb-10 border-ui-border-base  relative bg-ui-bg-subtle">
      <div className="grid w-full sm:gap-8 gap-6 sm:grid-cols-2 grid-cols-1 ">
        <div className="flex w-full items-center sm:justify-center">
          <Image
            src={
              "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728761133/pexels-asphotograpy-96612-removebg-preview_wqune4.png"
            }
            alt="Camera"
            width={800}
            height={800}
            className="w-[80%] sm:w-full object-cover"
          />
        </div>

        <div className="w-full  relative z-10 px-6 md:px-2 text-black">
          {/* Top Content */}
          <h3 className="text-xs md:text-sm rounded-lg px-3 w-fit py-1 shadow-sm border text-gray-600 md:mb-4 mb-3">
            Premium Cameras
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
            Smart Security Monitoring
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg md:max-w-xl max-w-[400px] mb-6">
            Ensure the safety of your home and business with our top-of-the-line
            CCTV cameras. Featuring crystal-clear HD resolution, night vision,
            and remote monitoring capabilities, our cameras offer
            round-the-clock protection.
          </p>

          {/* Button */}
          <Link
            href="/categories/cameras"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-black text-white font-bold py-3 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <span className="relative flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              <span>Shop CCTV Cameras</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="grid w-full sm:gap-8 gap-6 sm:grid-cols-2 grid-cols-1">
        <div className="flex md:order-2 w-full items-center sm:justify-center">
          <Image
            src={
              "https://res.cloudinary.com/djgmw3i6f/image/upload/t_Banner 9:16/v1728922034/access-control-systems-removebg-preview_t49cuj.png"
            }
            alt="Camera"
            width={800}
            height={800}
            className="w-[80%] max-h-[300px] sm:w-full object-contain"
          />
        </div>

        <div className="w-full sm:order-1 text-right relative flex flex-col items-end z-10 px-6 md:px-2 text-black">
          {/* Top Content */}
          <h3 className="text-xs md:text-sm shadow-sm border rounded-lg px-3 w-fit py-1 text-gray-600 md:mb-4 mb-3">
            Total Control, Total Security
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
            Access Control Units: Smart Security for Any Space
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg  md:max-w-xl max-w-[400px]  mb-6">
            Take charge of who enters your premises with cutting-edge access
            control units. Our systems provide advanced security, ensuring only
            authorized individuals can gain entry.
          </p>

          {/* Button */}
          <Link
            href="/categories/acu"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-black/90 backdrop-blur-lg text-white font-bold py-3 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-white/20 shadow-md hover:shadow-lg hover:border-black focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="relative flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              <span>Shop ACU</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="grid w-full sm:gap-8 my-7 gap-6 sm:grid-cols-2 grid-cols-1">
        <div className="flex w-full items-center sm:justify-center">
          <Image
            src={
              "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728923425/electric-fence-removebg-preview_l6ngyo.png"
            }
            alt="Camera"
            width={800}
            height={800}
            className="w-[80%] sm:w-full object-contain  "
          />
        </div>

        <div className="w-full  relative z-10 px-6 md:px-2 text-black">
          {/* Top Content */}
          <h3 className="text-xs md:text-sm  shadow-sm border rounded-lg px-3 w-fit py-1 text-gray-600 md:mb-4 mb-3">
            Unmatched Perimeter Protection
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
            Ultimate Barrier for Maximum Security
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg md:max-w-xl max-w-[400px]  mb-6">
            Fortify your boundaries with our high-voltage electric fencing
            systems. Designed to deter intruders, these fences provide a
            powerful, non-lethal shock, creating a strong physical and
            psychological barrier. Perfect for residential, commercial, or
            industrial properties.
          </p>

          {/* Button */}
          <Link
            href="/categories/electric-fencing"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-black/90 backdrop-blur-lg text-white font-bold py-3 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-white/20 shadow-md hover:shadow-lg hover:border-black focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="relative flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              <span>Shop Electric Fencing</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="grid w-full sm:gap-8 gap-6 sm:grid-cols-2 grid-cols-1">
        <div className="flex md:order-2 w-full items-center sm:justify-center">
          <Image
            src={
              "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728923774/nova4k-front-dash-cam-removebg-preview_xevaix.png"
            }
            alt="Camera"
            width={800}
            height={800}
            className="w-[80%] sm:w-full object-contain"
          />
        </div>

        <div className="w-full sm:order-1 text-right relative flex flex-col items-end z-10 px-6 md:px-2 text-black">
          {/* Top Content */}
          <h3 className="text-xs md:text-sm shadow-sm border rounded-lg px-3 w-fit py-1 text-gray-600 md:mb-4 mb-3">
            Your Eyes on the Road
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
            Capture Every Moment, Every Mile
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg  md:max-w-xl max-w-[400px]  mb-6">
            These devices record your journey in real-time, providing crucial
            footage in case of accidents, disputes, or unexpected events. With
            features like night vision, wide-angle lenses, and loop recording,
            our dash cams ensure you never miss a detail.
          </p>

          {/* Button */}
          <Link
            href="/categories/dashboard-cameras"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-black/90 backdrop-blur-lg text-white font-bold py-3 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-white/20 shadow-md hover:shadow-lg hover:border-black focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="relative flex items-center">
              <Video className="mr-2 h-5 w-5" />
              <span>Shop Dashboard Cameras</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="grid w-full sm:gap-8 gap-6 sm:grid-cols-2 grid-cols-1">
        <div className="flex w-full items-center sm:justify-center">
          <Image
            src={
              "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728924120/71vtrmDQpJL._AC_UF894_1000_QL80_-removebg-preview_ymlvrg.png"
            }
            alt="Camera"
            width={800}
            height={800}
            className="w-[80%] sm:w-full object-contain max-h-[300px]  "
          />
        </div>

        <div className="w-full  relative z-10 px-6 md:px-2 text-black">
          {/* Top Content */}
          <h3 className="text-xs md:text-sm shadow-sm border rounded-lg px-3 w-fit py-1 text-gray-600 md:mb-4 mb-3">
            Keyless Security, Total Convenience
          </h3>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-4">
            Control Access with a Tap
          </h1>

          {/* Brief Description */}
          <p className="text-base md:text-lg md:max-w-xl max-w-[400px]  mb-6">
            Offering keyless entry via smartphone, code, or fingerprint, these
            locks give you full control over who enters your space. With
            real-time access logs and remote locking features, smart locks
            provide unmatched convenience and security.
          </p>

          {/* Button */}
          <Link
            href="/categories/smart-locks"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-black/90 backdrop-blur-lg text-white font-bold py-3 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-white/20 shadow-md hover:shadow-lg hover:border-black focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="relative flex items-center">
              <Smartphone className="mr-2 h-5 w-5" />
              <span>Shop Smart Locks</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories
