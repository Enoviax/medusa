import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Copy } from "@medusajs/ui"

const ProductWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center gap-14 px-6 py-4">
        <Heading level="h2">Product Preview/Social-share Link</Heading>
        <Copy variant="default" content={`https://sharkeye.com`} className="w-8 h-8" />       
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.before",
})

export default ProductWidget