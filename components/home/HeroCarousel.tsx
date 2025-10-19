import React from 'react'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../ui/carousel'
// import { SectionTitle } from '../global'


function HeroCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default HeroCarousel