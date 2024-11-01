'use client'

import { Button } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"

interface WhatsAppButtonProps {
  product: HttpTypes.StoreProduct
  price?: string
}

export default function WhatsAppButton({ product, price }: WhatsAppButtonProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent the parent Link component from triggering
    
    const message = encodeURIComponent(
      `Hi, I'm interested in purchasing:\n\n` +
      `Product: ${product.title}\n` +
      `Price: ${price || 'Not specified'}\n` +
      `Product Link: ${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.handle}`
    )
    
    // Replace with your business phone number
    const phoneNumber = "254746685837" // e.g., "1234567890"
    
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    )
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white"
      size="large"
    >
      Order via WhatsApp
    </Button>
  )
}