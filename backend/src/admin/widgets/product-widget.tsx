import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"
import {Link} from "@medusajs/icons"

const ProductWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center gap-14 px-6 py-4">
        <Heading level="h2">Product Preview/Social-share Link</Heading>
        <Link href="/product/123" className="w-7 h-7"/>        
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.before",
})

export default ProductWidget