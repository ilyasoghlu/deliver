import React from 'react'
import { ServiceBlogItem } from '@prisma/client'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

function ServiceBlog({servicesBlog}:{servicesBlog: ServiceBlogItem[]}) {
    return (
      <div className="grid gap-2 md:grid-cols-2">
        {servicesBlog.map((serviceItem) => {
          const { title, image, description, id } = serviceItem;
          console.log(serviceItem);
          return (
            <article
              key={id}
              className="group relative "
            >
              <Link href={`/services/${id}`}>
                <Card className="h-24  transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent>
                    <div className="relative rounded overflow-hidden ">
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
                      <p className="text-muted-foreground">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </article>
          );
        })}
      </div>
    );
}

export default ServiceBlog