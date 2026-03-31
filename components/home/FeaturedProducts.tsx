import React from 'react'



async function FeaturedProducts({children}:{children:React.ReactNode}) {
    
    return (
        <section className='flex flex-col py-12'>
            {children}
        </section>
    )
}

export default FeaturedProducts