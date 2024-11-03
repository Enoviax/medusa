import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Categories from "@modules/home/components/categories"
import { CarouselSize } from "@modules/home/components/showcase"
import { listCategories } from "@lib/data/categories"


export const metadata: Metadata = {
  title: "Keensight - Professional Security Systems & CCTV Solutions",
  description: "Leading provider of comprehensive security solutions including CCTV cameras, access control systems, electric fencing, dashboard cameras, and smart locks. Enhance your home and business security with our professional installation services.",
  keywords: "CCTV cameras, Keensight, Keensight, keensight, keensight security, security cameras, access control systems, electric fencing, dashboard cameras, smart locks, home security systems, business security solutions, security installation, video surveillance, door access control, security monitoring, Keensight security, commercial security systems, residential security systems",
  authors: [{ name: "Keensight" }],
  openGraph: {
    type: 'website',
    title: 'Keensight - Professional Security Systems & CCTV Solutions',
    description: 'Transform your security with Keensight\'s professional CCTV, access control, and smart security solutions.',
    images: [
      {
        url: '/src/app/opengraph-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Keensight Security Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keensight - Professional Security Systems & CCTV Solutions',
    description: 'Transform your security with Keensight\'s professional CCTV, access control, and smart security solutions.',
    images: ['/src/app/twitter-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },  
  alternates: {
    canonical: 'https://www.keensight.com', 
  }
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }
  const product_categories = await listCategories()

  return (
    <>
      <Hero />
      <Categories />
      {/* get all product categories and then map through them */}
      {product_categories.map((p, index) => {
        return <CarouselSize key={index} category={p} />
      })}      
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
