import { sdk } from "@lib/config"
import { cache } from "react"

export async function listCategories () {
  return sdk.store.category
    .list({ fields: "+category_children" }, { next: { tags: ["categories"] } })
    .then(({ product_categories }) => product_categories)
}

export async function getCategoriesList (
  offset: number = 0,
  limit: number = 100
) {
  return sdk.store.category.list(
    // TODO: Look into fixing the type
    // @ts-ignore
    { limit, offset },
    { next: { tags: ["categories"] } }
  )
}

export const getCategoryByHandle = cache(async function (
  categoryHandle: string[]
) {

  return sdk.store.category.list(
    // TODO: Look into fixing the type
    // @ts-ignore
    { handle: categoryHandle },
    { next: { tags: ["categories"] } }
  )
})
