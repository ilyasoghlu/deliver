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
        <div className='flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center gap-4'>
            <div>
                <Logo />
                <SocialLinks />
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