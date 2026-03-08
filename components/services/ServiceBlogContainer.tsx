import React from 'react'
import ServiceBlog from './ServiceBlog'
import { fetchAllServiceBlog } from '@/utils/actions'

async function ServiceBlogContainer() {
    const servicesBlog = await fetchAllServiceBlog()
        return (
            <div className='flex flex-row flex-wrap gap-2 p-8'>
                <ServiceBlog servicesBlog = {servicesBlog}/>
            </div>
        )
}

export default ServiceBlogContainer