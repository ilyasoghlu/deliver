import React from 'react'
import ServiceBlog from './ServiceBlog'
import { fetchAllServiceBlog } from '@/utils/actions'

async function ServiceBlogContainer() {
    const servicesBlog = await fetchAllServiceBlog()

    console.log(servicesBlog)
        return (
            <div className='flex p-8 gap-4'>
                <ServiceBlog servicesBlog = {servicesBlog}/>
            </div>
        )
}

export default ServiceBlogContainer