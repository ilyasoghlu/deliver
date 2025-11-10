import React from 'react'
import MediaCard from './MediaCard'
import { fetchAllMedia } from '@/utils/actions'


async function BlogContainer() {
    const blog = await fetchAllMedia()
    return (
        <>
        <div className="mt-4">
            <MediaCard blog={blog}/>
        </div>
     
        </>
    )
}

export default BlogContainer