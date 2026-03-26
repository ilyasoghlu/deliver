import React from 'react'
import { fetchServiceBlogItemDetails } from '@/utils/actions'
import Image from 'next/image'
async function ServiceBlogDetail({params}:{params:{id:string}}) {
    const blog = await fetchServiceBlogItemDetails(params.id)
    const {title,image,description} = blog
  return (
    <section>
        <div className='mt-6 flex flex-col gap-y-8' >
        <div className='relative h-full'>
            <Image 
                src={image}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 33vw " 
                priority 
                className="w-full rounded object-cover" /> 
                
        </div>
        <div>
            <h1 className='text-xl mt-5 font-bold uppercase'>{title}</h1>
            <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        </div>
        </div>
    </section>
  )
}

export default ServiceBlogDetail