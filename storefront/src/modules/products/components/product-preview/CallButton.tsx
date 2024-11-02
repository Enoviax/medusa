'use client'
import { Button } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"

interface CallButtonProps {
  product: HttpTypes.StoreProduct
  phoneNumber?: string
}

export default function CallButton({ product, phoneNumber = "254746685837" }: CallButtonProps) {
  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Format the phone number for tel: protocol
    // Remove any non-digit characters and ensure proper formatting
    const formattedNumber = phoneNumber.replace(/\D/g, '')
    
    // Create the telephone link
    window.location.href = `tel:+${formattedNumber}`
  }

  return (
    <Button
      onClick={handleCallClick}
      className="w-full bg-black hover:bg-black/80 text-white"
      size="large"
    >
      Call for Enquiries
    </Button>
  )
}