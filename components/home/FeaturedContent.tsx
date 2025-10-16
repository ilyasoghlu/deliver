import React from 'react'
import { fetchFeaturedProducts } from '@/app/utils/actions'
import { EmptyList, Card, SectionTitle } from '../global'
import { Separator } from '../ui/separator'



function FeaturedContent({text}:{text:string}) {
    return (
        <div className='flex flex-col py-12'>
            <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
                <SectionTitle text={text} />
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between py-8">
                <Card />
                <Card />
                <Card />
            </div>
            <Separator />
        </div>
    )
}

export default FeaturedContent