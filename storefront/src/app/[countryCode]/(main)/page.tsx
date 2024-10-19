import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Categories from "@modules/home/components/categories"
import { CarouselSize } from "@modules/home/components/showcase"
import { listCategories } from "@lib/data/categories"

export const metadata: Metadata = {
  title: "Keensight",
  description:
    "Your trusted provider of CCTV cameras, access control units, electric fencing, dashboard cameras, and smart locks for enhanced safety and security.",
  keywords:
    "CCTV cameras, access control, electric fencing, dashboard cameras, smart locks, home security, office security, security solutions",
  authors: [{ name: "Keensight" }],
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
