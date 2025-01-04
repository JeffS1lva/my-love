import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import love1 from "../assets/love-1.jpg"
import love2 from "../assets/love-2.jpg"
import love3 from "../assets/love-3.jpg"
import love4 from "../assets/love-4.jpg"
import love5 from "../assets/love-5.jpg"
import love6 from "../assets/love-6.jpg"
import love7 from "../assets/love-7.jpg"
import love8 from "../assets/love-8.jpg"
import love9 from "../assets/love-9.jpg"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [love1, love2, love3, love4, love5, love6, love7, love8, love9]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full max-w-xs m-auto "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <img src={image} className="object-cover rounded-md w-full h-full" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}
