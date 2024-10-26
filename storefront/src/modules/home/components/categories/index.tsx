'use client'
import React from "react";
import { Camera, Smartphone, Video, Zap, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  link: string;
  icon: any;
  buttonText: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  image, 
  badge, 
  title, 
  description, 
  link, 
  icon: Icon, 
  buttonText, 
  imagePosition = "left",
  className = "" 
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeIn}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 items-center ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}>
        <div className={`flex items-center justify-center ${imagePosition === "right" ? "md:order-2" : ""}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-square"
          >
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className="object-contain w-full h-full"
              priority
            />
          </motion.div>
        </div>

        <div className={`flex flex-col ${
          imagePosition === "right" ? "md:order-1 items-end md:text-right" : "max-md:items-end"
        }`}>
          <span className="inline-block w-fit px-4 py-1.5 mb-4 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm border border-gray-100">
            {badge}
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl">
            {description}
          </p>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={link}
              className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{buttonText}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  const categories = [
    {
      image: "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728761133/pexels-asphotograpy-96612-removebg-preview_wqune4.png",
      badge: "Premium Cameras",
      title: "Smart Security Monitoring",
      description: "Ensure the safety of your home and business with our top-of-the-line CCTV cameras. Featuring crystal-clear HD resolution, night vision, and remote monitoring capabilities, our cameras offer round-the-clock protection.",
      link: "/categories/cameras",
      icon: Camera,
      buttonText: "Shop CCTV Cameras"
    },
    {
      image: "https://res.cloudinary.com/djgmw3i6f/image/upload/t_Banner%209:16/v1728922034/access-control-systems-removebg-preview_t49cuj.png",
      badge: "Total Control, Total Security",
      title: "Access Control Units: Smart Security for Any Space",
      description: "Take charge of who enters your premises with cutting-edge access control units. Our systems provide advanced security, ensuring only authorized individuals can gain entry.",
      link: "/categories/acu",
      icon: Lock,
      buttonText: "Shop ACU",
      imagePosition: "right"
    },
    {
      image: "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728923425/electric-fence-removebg-preview_l6ngyo.png",
      badge: "Unmatched Perimeter Protection",
      title: "Ultimate Barrier for Maximum Security",
      description: "Fortify your boundaries with our high-voltage electric fencing systems. Designed to deter intruders, these fences provide a powerful, non-lethal shock, creating a strong physical and psychological barrier.",
      link: "/categories/electric-fencing",
      icon: Zap,
      buttonText: "Shop Electric Fencing"
    },
    {
      image: "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728923774/nova4k-front-dash-cam-removebg-preview_xevaix.png",
      badge: "Your Eyes on the Road",
      title: "Capture Every Moment, Every Mile",
      description: "These devices record your journey in real-time, providing crucial footage in case of accidents, disputes, or unexpected events. With features like night vision, wide-angle lenses, and loop recording.",
      link: "/categories/dashboard-cameras",
      icon: Video,
      buttonText: "Shop Dashboard Cameras",
      imagePosition: "right"
    },
    {
      image: "https://res.cloudinary.com/djgmw3i6f/image/upload/v1728924120/71vtrmDQpJL._AC_UF894_1000_QL80_-removebg-preview_ymlvrg.png",
      badge: "Keyless Security, Total Convenience",
      title: "Control Access with a Tap",
      description: "Offering keyless entry via smartphone, code, or fingerprint, these locks give you full control over who enters your space. With real-time access logs and remote locking features.",
      link: "/categories/smart-locks",
      icon: Smartphone,
      buttonText: "Shop Smart Locks"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure Your World
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of security solutions designed to protect what matters most to you.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              {...category}
              className={index % 2 === 0 ? "transform hover:-translate-y-1" : "transform hover:translate-y-1"}
              imagePosition={category.imagePosition as "left" | "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;