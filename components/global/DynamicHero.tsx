'use client'
import { usePathname } from 'next/navigation'
import { Hero } from '../home'
import PageTitle from './PageTitle'
import ProductBreadCrumbs from '../product-details/ProductBreadCrumbs'


function DynamicHero() {
    const pathname = usePathname()

    // const isProductPage = pathname.startsWith('/portfolio/')&& pathname.split('/').length ===3
    const titles: Record<string, string> = {
        "/": "Home",
        "/about": "About Us",
        "/portfolio": "Portfolio",
        "/contact": "Contact Us",
        "/blog": "Our Blog",
        "/services": "Services",
        "/archive": "Archive",
        };
        const text = titles[pathname] || 'Page'
    if(pathname === '/'){
        return<Hero />
    }
    // if (isProductPage) {
    //     return <ProductBreadCrumbs productId={productId} />
    // }
    return<PageTitle text={text} />
}

export default DynamicHero