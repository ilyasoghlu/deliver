import { Container } from '../global'
import React from 'react'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className='flex flex-wrap items-center justify-center py-12'>
      <Container>
        <HeroCarousel />
      </Container>
    </section>
  )
}

export default Hero