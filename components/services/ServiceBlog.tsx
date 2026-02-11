import React from 'react'
import { ServiceBlogItem } from '@prisma/client'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

function ServiceBlog({servicesBlog}:{servicesBlog: ServiceBlogItem[]}) {
    return (
    <div>
        {
            servicesBlog.map((serviceItem) =>{
                const {title, image, description, id} = serviceItem
                console.log(serviceItem)
                return (
                    <article
                        key={id}
                        className="group relative"
                    >
                    <Link href={`/services/${id}`}>
                        <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                        <CardContent className="p-4">
                            <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                priority
                                className="rounded 
                                            w-full 
                                            object-cover 
                                            transform 
                                            group-hover:scale-110 
                                            transition-transform 
                                            duration-500"
                            />
                            </div>
                            <div className="mt-4 text-center">
                            <h2 className="text-lg capitalize">{title}</h2>
                            <p className="text-muted-foreground mt-2">{description}</p>
                            </div>
                        </CardContent>
                        </Card>
                    </Link>
                    </article>
                );
            })
        }
    </div>
    )
}

export default ServiceBlog