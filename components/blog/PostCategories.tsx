import { NewsPost } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PostCategories({categories}:{categories:NewsPost[]}) {
    return (
        <>
            <h5 className="uppercase font-semibold">Archive by Category</h5>
            <ul className="mt-2 p-4">
                {
                    categories.map((article)=>{
                        const {category} = article
                            return(
                                
                                    <li key={category} className='flex items-center gap-2 text-muted-foreground cursor-pointer uppercase'><MdOutlineKeyboardArrowRight />
                                        <Link key={category} href={`/category/${category}`}>
                                    {category} 
                                </Link>
                                </li>
                            )
                        })
                }
            </ul>
        </>
    )
}

export default PostCategories




// import { NewsPost } from '@prisma/client'
// import React from 'react'
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// function PostCategories({articlesCategory, onSelectCategory}:{articlesCategory:{category:string}[]; onSelectCategory:(category:string)=>void;}) {
//     return (
//         <>
//             <h5 className="uppercase font-semibold">Archive by Category</h5>
//             <ul className="mt-2 p-4">
//                             {
//                                 articlesCategory.map((article)=>{
//                                     const {category} = article
                                    
//                                     return(
//                                         <li key={category} onClick={()=> onSelectCategory(category)} className='flex items-center gap-2 text-muted-foreground cursor-pointer uppercase'><MdOutlineKeyboardArrowRight />{category} </li>
//                                     )
//                                 })
//                             }
//                         </ul>
//         </>
//     )
// }

// export default PostCategories