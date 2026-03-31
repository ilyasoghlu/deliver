import { NewsPost } from '@prisma/client';
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function LastPosts({articles}:{articles:NewsPost[]}) {

    return (
        <>
            <h5 className="uppercase font-semibold">Last 20 posts</h5>
            <ul className="mt-2 p-4">
                {
                    articles.map((article)=>{
                        const {title, id} = article
                        
                        return(
                            <li key={id} className='flex items-center gap-2 text-muted-foreground cursor-pointer'><MdOutlineKeyboardArrowRight />{title} </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default LastPosts