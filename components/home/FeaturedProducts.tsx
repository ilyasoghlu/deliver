import React from 'react'
import { fetchFeaturedProducts } from '@/utils/actions'
import { EmptyList } from '../global'


async function FeaturedProducts({children}:{children:React.ReactNode}) {
    
    return (
        <section className='flex flex-col py-12'>
            {children}
        </section>
    )
}

export default FeaturedProducts