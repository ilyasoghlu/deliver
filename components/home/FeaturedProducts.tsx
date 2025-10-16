import React from 'react'
import { fetchFeaturedProducts } from '@/app/utils/actions'
import { EmptyList } from '../global'


function FeaturedProducts({children}:{children:React.ReactNode}) {
    return (
        <div className='flex flex-col py-12'>
            {children}
        </div>
    )
}

export default FeaturedProducts