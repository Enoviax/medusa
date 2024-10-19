"use client"
import React, { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PCourosel = ({ productCards }: { productCards: React.ReactNode }) => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full lg:px-10 mx-auto max-w-[90%]"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {productCards}
      <CarouselPrevious className="absolute shadow bg-black/70 top-[50%] text-white left-3" />
      <CarouselNext className="absolute top-[50%] shadow text-white right-3 bg-black/70" />
    </Carousel>
  )
}

export default PCourosel
