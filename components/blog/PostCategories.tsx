import { NewsPost } from '@prisma/client'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PostCategories({articlesCategory}:{articlesCategory:NewsPost[]}) {
    return (
        <>
            <h5 className="uppercase font-semibold">Archive by Category</h5>
            <ul className="mt-2 p-4">
                            {
                                articlesCategory.map((article)=>{
                                    const {category, id} = article
                                    
                                    return(
                                        <li key={id} className='flex items-center gap-2 text-muted-foreground cursor-pointer uppercase'><MdOutlineKeyboardArrowRight />{category} </li>
                                    )
                                })
                            }
                        </ul>
        </>
    )
}

export default PostCategories