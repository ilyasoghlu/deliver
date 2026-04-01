import React from 'react'
import { DateBlock, CreatorInfo,NewsType, CommentBlock  } from "@/components/blog";
import { fetchArticleDetail } from '@/utils/actions';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';


async function ArticleDetailPage({params}:{params:{id:string}}) {
    const article = await fetchArticleDetail(params.id)
    const {
        title, 
        description, 
        image,
        category,
        createdAt, 
        updatedAt,
        avgRating,
        ratingCount,
        reviews
    } =article
  return (
    <section>
        <div className='flex flex-col'>
            {/* Image */}
            <div className='relative h-full'>
                <Image 
                    src={image}
                    alt={title}
                    fill
                    sizes=" (max-width:768px) 100vw,
                        (max-width:1200px) 50vw, 33vw "
                    priority
                    className="w-full rounded object-cover"
                />
            </div>
            {/* Blog COntent */}
            <div>
                <div className='flex flex-col'>
                    <h1>{title}</h1>
                    <div className='flex flex-row gap-3'>
                        <DateBlock date={createdAt} />
                        <NewsType text={category} />
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleDetailPage