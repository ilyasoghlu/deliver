import db from './db'
import { redirect } from 'next/navigation'


export const fetchFeaturedProducts = async() =>{
    const products = await db.product.findMany({
        where:{
            featured:true,
        }
    })
    return products
}


export const fetchAllProducts = async() =>{
    const products = await db.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return products
}

export const fetchProductDetails = async(productId:string) =>{
    const product = await db.product.findUnique({
        where:{
            id:productId
        }
    })
    if(!product) redirect('/portfolio')
        return product
}


export const fetchAllMedia = async() =>{
    const blog = await db.mediaItem.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return blog
}

export const fetchBlogDetails = async (mediaItemId:string) =>{
    const mediaItem = await db.mediaItem.findUnique({
        where:{
            id:mediaItemId
        },
    })
    if(!mediaItem) redirect('/blog')
        return mediaItem
}
