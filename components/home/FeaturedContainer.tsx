import React from 'react'

function FeaturedContainer({children}:{children:React.ReactNode}) {
    return (
        <div className='flex flex-col py-12'>
            {children}
        </div>
    )
}

export default FeaturedContainer