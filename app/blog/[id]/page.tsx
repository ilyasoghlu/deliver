import { DateBlock, CreatorInfo,NewsType, CommentBlock  } from "@/components/blog";
import BlogContainer from "@/components/blog/BlogContainer";


import { BreadCrumbs, PageTitle } from "@/components/global";
import { fetchBlogDetails } from "@/utils/actions";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";



import React from 'react'

async function BlogDetailsPage({params}:{params:{id:string}}) {
    const blog = await fetchBlogDetails(params.id)
    const {mediaFile, title, creator, newsType, comment, commentNumber, description, createdAt, updatedAt} = blog;
    

    return (
        <section>
        {/* <BreadCrumbs text={title} /> */}
        <div className="flex flex-col">
            {/* Image */}
            <div className="relative h-full ">
            <Image
                src={mediaFile}
                alt={title}
                fill
                sizes=" (max-width:768px) 100vw,
                        (max-width:1200px) 50vw, 33vw "
                priority
                className="w-full rounded object-cover"
            />
            </div>
            {/* Blog Content */}
            <div>
            <div className="flex flex-col ">
                <h1>{title}</h1>
                <div className="flex flex-row gap-3">
                <DateBlock date={createdAt} />
                <CreatorInfo text={creator} />
                <NewsType text={newsType} />
                <CommentBlock text={comment} />
                </div>
            </div>
            </div>
            <Separator />
            {/* Social Link */}
            Here Will be Social likes
            <Separator />
            {/* Comments */}
            Here Will be Comment block
            <Separator />
            {/* Form  */}
            Here Will be Form Component
        </div>
        </section>
    );
}

export  default BlogDetailsPage