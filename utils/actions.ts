
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

// Our Team functionality
export const fetchOurTeam = async () => {
    return await db.ourTeam.findMany({
        select: {
            id: true,
            image: true, // ✅ CORRECT COLUMN
            firstName: true,
            lastName: true,
            position: true,
            description: true,
            clerkId: true,
        },
    });
};

export const fetchMemberDetails = async (memberId:string) =>{
    const member = await db.ourTeam.findUnique({
        where:{
            id:memberId
        },
    })
    if(!member) redirect('/about')
        return member
}

export const fetchAllServiceBlog = async() =>{
    return await db.serviceBlogItem.findMany({
    select: {
                id: true,
                image: true, 
                title: true,
                description: true,
            
            },
            
        })
}



export const fetchServiceBlogItemDetails = async (serviceBlogItemId:string) => {
    const serviceBlogItem = await db.serviceBlogItem.findUnique({
        where: {id: serviceBlogItemId}
    });
    if (!serviceBlogItem) {
        redirect("/services");  
    } 
    return serviceBlogItem;
};

export const fetchAllServiceInfo = async() =>{
    return await db.serviceInfo.findMany({
    select: {
                id: true,
                title: true,
                info: true,
            },  
        })
}

export const fetchLastArticles = async()=>{
    return await db.newsPost.findMany({
        orderBy:{
            createdAt: 'desc',

        },
            take: 20,
        
    })
}

export const fetchCategories = async() =>{
    return await db.newsPost.groupBy({
        by: ['category'],
    })
}

// export const fetchArticlesCategory = async(category:string) =>{
//     return await db.newsPost.findMany({
//         where:{
//             category:category,
//         },
//     })
// }

export const fetchArticlesByCategory = async (category: string) => {
                            return await db.newsPost.findMany({
                                where: {
                                category: category
                                },
                                orderBy: {
                                createdAt: "desc"
                                }
                            })
                            }

export const fetchArticleDetail = async(articleId:string) =>{
    const newsPost = await db.newsPost.findUnique({
        where: {id: articleId}
    });
    if (!articleId) {
        redirect("/archive");  
    } 
    return newsPost;
}

export const fetchArticleFrontend = async() =>{
    return await db.newsPost.findMany({
        where:{category:'frontend'},
        orderBy:{createdAt:'desc'}
    })
}