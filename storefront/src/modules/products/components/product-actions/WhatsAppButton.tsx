'use client'

import { Button } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { useState } from "react"

interface WhatsAppButtonProps {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  disabled?: boolean
}

export default function WhatsAppButton({ 
  product, 
  variant, 
  disabled 
}: WhatsAppButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Construct message with variant details if available
    const variantInfo = variant 
      ? variant.options?.map(opt => `${opt.option?.title ?? 'Unknown'}: ${opt.value}`).join(', ')
      : 'No specific variant selected'

    const message = encodeURIComponent(
      `Hi, I'm interested in purchasing:\n\n` +
      `Product: ${product.title}\n` +
      `Variant: ${variantInfo}\n` +
      `Product Link: ${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.handle}`
    )
    
    // Replace with your business phone number
    const phoneNumber = "254746685837" // e.g., "1234567890"
    
    setIsLoading(true)
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    )
    
    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      disabled={disabled || isLoading}
      className="w-full bg-green-700 hover:bg-green-600 text-white"
      variant="secondary"
      size="large"
      isLoading={isLoading}
    >
      Order via WhatsApp
    </Button>
  )
}