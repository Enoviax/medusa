// app/about/page.tsx
import React from "react";
import { Camera, Lock, Shield, Car } from "lucide-react"; // Importing Lucide icons

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-10 lg:px-20">
      <section className="max-w-4xl text-center space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to SecureHome, your trusted partner in advanced security solutions. 
          We specialize in providing high-quality CCTV cameras, access control systems, 
          electric fencing, dashboard cameras, and smart locks designed to keep you and 
          your loved ones safe.
        </p>
        <p className="text-lg text-gray-600">
          At SecureHome, our mission is simple: to empower our customers with the most 
          reliable, innovative, and accessible security technology on the market.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
        <FeatureCard
          icon={<Camera className="w-10 h-10 text-indigo-500" />}
          title="CCTV Cameras"
          description="Monitor your surroundings with high-definition, reliable surveillance."
        />
        <FeatureCard
          icon={<Lock className="w-10 h-10 text-indigo-500" />}
          title="Smart Locks"
          description="Secure and control access to your home with cutting-edge smart locks."
        />
        <FeatureCard
          icon={<Car className="w-10 h-10 text-indigo-500" />}
          title="Dashboard Cameras"
          description="Enhance your vehicle's safety with our range of dashboard cameras."
        />
        <FeatureCard
          icon={<Shield className="w-10 h-10 text-indigo-500" />}
          title="Access Control"
          description="Manage and protect your premises with secure access control solutions."
        />
      </section>

      <section className="mt-12 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600">
          We believe in providing peace of mind through security. Integrity, innovation, 
          and customer satisfaction are at the core of everything we do. With SecureHome, 
          you are investing in more than just a product – you’re investing in your peace of mind.
        </p>
      </section>
    </main>
  );
}

// FeatureCard component
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
