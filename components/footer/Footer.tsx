import React from 'react'
import Container from '../global/Container'
import Logo from '../navbar/Logo'
import ContactInfo from './ContactInfo'
import QuickLinks from './QuickLinks'
import NewsLetter from './NewsLetter'
import SocialLinks from '../navbar/SocialLinks'
import { Separator } from '../ui/separator'
import CopyRight from './CopyRight'

function Footer() {
  return (
    <footer className='py-8 bg-gray-800 text-white'>
    <Container className='flex flex-col py-4'>
        <div className='grid grid-cols-5 gap-6 mb-6'>
          <div className='col-span-2'>
            <div className='flex flex-col sm:flex-row justify-between mb-8'>
              <Logo />
              <div>
                <SocialLinks />
              </div>
            </div>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima velit id architecto quod rerum sunt sed cumque repellat? Impedit doloribus dolore hic dolores reiciendis.
            </p>
          </div>
            <ContactInfo />
            <QuickLinks />
            <NewsLetter />
        </div>
        <Separator />
        <CopyRight />
    </Container>
    </footer>
  )
}

export default Footer