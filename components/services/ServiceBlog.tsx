import React from 'react'
import { ServiceBlogItem } from '@prisma/client'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

function ServiceBlog({servicesBlog}:{servicesBlog: ServiceBlogItem[]}) {
    return (
      <>
        {servicesBlog.map(({ title, image, description, id }) => (
          <article key={id} className="group relative w-full md:w-[48%]">
            <Link href={`/services/${id}`}>
              <Card className="flex flex-row transition-shadow duration-300 hover:shadow-xl">

                {/* Image */}
                <div className="relative w-1/3">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <CardContent className="w-2/3 p-4 text-center">
                  <h2 className="text-lg font-semibold capitalize">
                    {title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    {description}
                  </p>
                </CardContent>

              </Card>
            </Link>
          </article>
        ))}
</>
    );
}

export default ServiceBlog