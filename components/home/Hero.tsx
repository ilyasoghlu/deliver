import { Container } from '../global'
import React from 'react'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className='flex items-center justify-center py-12'>
      <Container className='w-full'>
        <HeroCarousel />
      </Container>
    </section>
  )
}

export default Hero