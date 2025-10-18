'use client'
import { usePathname } from 'next/navigation'
import { Hero } from '../home'
import PageTitle from './PageTitle'


function DynamicHero() {
    const pathname = usePathname()
    const titles: Record<string, string> = {
        "/": "Home",
        "/about": "About Us",
        "/portfolio": "Portfolio",
        "/contact": "Contact Us",
        "/blog": "Blog",
        "/services": "Services",
        "/archive": "Archive",
        };
        const text = titles[pathname] || 'Page'
    return pathname === "/"?<Hero />:<PageTitle text={text} />
    
}

export default DynamicHero