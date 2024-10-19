/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { getProductsList, getProductsListWithSort } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductsCourosel from "./ProductsCourosel"
import { getRegion } from "@lib/data/regions"
import { getCategoryByHandle } from "@lib/data/categories"
import { CarouselContent, CarouselItem } from "@/components/ui/carousel"
import ProductPreview from "@modules/products/components/product-preview"
import InteractiveLink from "@modules/common/components/interactive-link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export async function CarouselSize({
  category,
}: {
  category: HttpTypes.StoreProductCategory
}) {
  const { product_categories } = await getCategoryByHandle([category.handle])

  const cat = product_categories[product_categories.length - 1]

  const queryParams: PaginatedProductsParams = {
    limit: 12,
  }
  queryParams["category_id"] = [cat.id]

  const sortBy = "created_at"
  queryParams["order"] = "created_at"

  const countryCode = "ke"

  const region = await getRegion(countryCode)

  // if has children
  const p: HttpTypes.StoreProduct[] = []
  if (cat.category_children) {
    cat.category_children.map(async (category) => {
      queryParams["category_id"] = [category.id]
      let {
        response: { products, count },
      } = await getProductsList({ queryParams, countryCode })

      p.push(...products)
      return p
    })
  }

  let {
    response: { products, count },
  } = await getProductsList({ queryParams, countryCode })

  const total_products = [...p, ...products]

  return (
    <>
      {total_products.length > 0 && cat.parent_category_id === null && cat.category_children.length === 0 && (
        <div className="py-10 border-b border-ui-border-base relative bg-ui-bg-subtle">
          <div className="flex justify-between items-center pr-4 pl-16 py-5">
            <Link href={`/categories/${cat.handle}`}>
              <h3 className="md:px-4 md:py-2 px-2 py-1 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                {cat.name}
              </h3>
            </Link>

            <div className="md:pr-12">
              <InteractiveLink href={`/categories/${cat.handle}`}>
                {cat.name}
              </InteractiveLink>
            </div>

            {cat.category_children.length > 0 && (
              <div className="mb-8 text-base-large md:pr-12">
                <ul className="grid grid-cols-1 gap-2">
                  {cat.category_children?.map((c) => (
                    <li key={c.id}>
                      <InteractiveLink href={`/categories/${c.handle}`}>
                        {c.name}
                      </InteractiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!cat.category_children && (
              <InteractiveLink href={`/categories/${cat.handle}`}>
                {cat.name}
              </InteractiveLink>
            )}
          </div>

          <ProductsCourosel
            productCards={
              <CarouselContent className="-ml-1 py-2">
                {total_products.map((p) => (
                  <CarouselItem
                    key={p.id}
                    className="pl-4 md:basis-[37%] lg:basis-[28%]"
                  >
                    <ProductPreview product={p} region={region!} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            }
          />
        </div>
      )}
      {total_products.length > 0 && cat.category_children.length > 0 && (
        <div className="py-10 border-b border-ui-border-base relative bg-ui-bg-subtle">
          <div className="flex justify-between items-center pr-4 pl-16 py-5">
            
              <Link href={`/categories/${cat.handle}`}>
              <h3 className="md:px-4 md:py-2 px-2 py-1 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                {cat.name}
              </h3>
              </Link>
         

            {cat.category_children && (
              <div className="mb-8 text-base-large">
                <ul className="grid grid-cols-1 gap-2">
                  {cat.category_children?.map((c) => (
                    <li key={c.id}>
                      <InteractiveLink href={`/categories/${c.handle}`}>
                        {c.name}
                      </InteractiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!cat.category_children && (
              <InteractiveLink href={`/categories/${cat.handle}`}>
                {cat.name}
              </InteractiveLink>
            )}
            
          </div>

          <ProductsCourosel
            productCards={
              <CarouselContent className="-ml-1 py-2">
                {total_products.map((p) => (
                  <CarouselItem
                    key={p.id}
                    className="pl-4 md:basis-[37%] lg:basis-[28%]"
                  >
                    <ProductPreview product={p} region={region!} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            }
          />
        </div>
      )}

    </>
  )
}

/*
 
{total_products.length > 0 && cat.category_children.length > 0 && (
        <div className="py-10 border-b border-ui-border-base relative bg-ui-bg-subtle">
          <div className="flex justify-between items-center pr-4 pl-16 py-5">
            
              <Link href={`/categories/${cat.handle}`}>
              <h3 className="md:px-4 md:py-2 px-2 py-1 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                {cat.name}
              </h3>
              </Link>
         

            {cat.category_children && (
              <div className="mb-8 text-base-large">
                <ul className="grid grid-cols-1 gap-2">
                  {cat.category_children?.map((c) => (
                    <li key={c.id}>
                      <InteractiveLink href={`/categories/${c.handle}`}>
                        {c.name}
                      </InteractiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!cat.category_children && (
              <InteractiveLink href={`/categories/${cat.handle}`}>
                {cat.name}
              </InteractiveLink>
            )}
            
          </div>

          <ProductsCourosel
            productCards={
              <CarouselContent className="-ml-1 py-2">
                {total_products.map((p) => (
                  <CarouselItem
                    key={p.id}
                    className="pl-4 md:basis-[37%] lg:basis-[28%]"
                  >
                    <ProductPreview product={p} region={region!} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            }
          />
        </div>
      )}
  
 */
