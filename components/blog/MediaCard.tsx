import React from 'react'
import DateBlock from './DateBlock'
import CreatorInfo from './CreatorInfo'
import NewsType from './NewsType'
import CommentBlock from './CommentBlock'
import MediaBlockTitle from './MediaBlockTitle'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { MediaItem } from '@prisma/client'
import { Separator } from '../ui/separator'


export default function MediaCard({blog}:{blog:MediaItem[]}) {
    return (
        
        
        <>
            {blog.map((mediaItem)=>{
                const { 
                    mediaFile,
                    title,
                    creator, 
                    newsType, 
                    comment, 
                    createdAt,
                    description,
                    id
                } = mediaItem    
                
                return(
                    <>
                    <article key={id} className='group relative p-2 my-4'>
                        <Link href={`/blog/${id}`}>
                            <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                                <CardContent className='p-4'>
                                <div className=" relative h-80 w-full overflow-hidden">
                                    <Image 
                                        src={mediaFile}
                                        alt={title}
                                        fill
                                        priority
                                        className='
                                                    object-cover 
                                                    transform 
                                                    group-hover:scale-110 
                                                    transition-transform 
                                                    duration-500'
                                    />
                                </div>
                                <MediaBlockTitle text={title} />
                                <div className='flex flex-row gap-3'>
                                    <DateBlock date={createdAt} />
                                    <CreatorInfo text={creator} />
                                    <NewsType text={newsType}/>
                                    <CommentBlock text={comment}/>
                                </div>
                                <p className="text-muted-foreground mt-2">{description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </article>
                    <Separator />
                    </>
                )

            })}
        </>
    )
}
