import React from 'react'
import DateBlock from './DateBlock'
import CreatorInfo from './CreatorInfo'
import NewsType from './NewsType'
import CommentBlock from './CommentBlock'
import MediaBlockTitle from './MediaBlockTitle'

export default function MediaCard() {
    return (
        <article className="flex flex-col items-start gap-2 p-2">
            <div className="h-80 w-3/4">
                Image or Video components
            </div>
            <MediaBlockTitle text='7 Strategies to Market Your Business Online' />
            <div className='flex -flex-row gap-3'>
                <DateBlock />
                <CreatorInfo />
                <NewsType />
                <CommentBlock />
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisi eget lectus iaculis congue. Nullam eleifend congue turpis, vel scelerisque massa fermentum ac ... </p>
        </article>
    )
}
