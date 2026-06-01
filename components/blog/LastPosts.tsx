import { NewsPost } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function LastPosts({articles}:{articles:NewsPost[]}) {

    return (
        <>
            <h5 className="uppercase font-semibold">Last 20 posts</h5>
                <section className='mt-4 p-4'>
                    {
                        articles.map((article) =>{
                            const {title, id} = article
                            return(
                                    
                                        <ul key={id}>
                                            <Link href={`/archive/${id}`}>
                                                <li 
                                                    className='flex items-center text-muted-foreground'
                                                ><MdOutlineKeyboardArrowRight/>{title}</li>
                                            </Link>
                                        </ul>
                                    
                                )
                            }
                        )
                    }
                </section>
            
        
        </>
    )
}

export default LastPosts