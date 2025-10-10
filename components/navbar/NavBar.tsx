'use client'
import Container from "../global/Container"
import { Separator } from "../ui/separator"
import DarkMode from "./DarkMode"
import Links from "./Links"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SocialLinks from "./SocialLinks"
import NavBarDropdown from "./NavBarDropdown"
import {useEffect, useState} from 'react'


function NavBar() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() =>{
        const handleSize= () =>{
            if(window.innerWidth <= 768){
                setIsMobile(true)
            }else {
                setIsMobile(false)
            }

        }
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => window.removeEventListener('resize', handleSize)
    }, [] )
    return (
        <nav>
            <Container >
                <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:items-center sm:py-8">
                    <Logo />
                    <div className="flex gap-4 items-center justify-between py-8">
                        <DarkMode />
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-row flex-wrap justify-between items-center py-4 sm:py-8">
                    <div className="flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-between gap-12 py-4">
                        {(isMobile)?
                    <NavBarDropdown />:
                    <Links />
                }
                    </div>
                    <NavSearch />
                </div>
            </Container>
        </nav>
    )
}

export default NavBar