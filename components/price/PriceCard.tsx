import React from 'react'
import { Card, CardContent, CardTitle, CardDescription, CardHeader, CardFooter } from '../ui/card'
import { Separator } from '../ui/separator'
import priceItems from '@/prisma/priceList.json'
import { formatCurrency } from '@/utils/format'
import Link from 'next/link'


function PriceCard() {
    return (
        <div className='py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {priceItems.map((priceItem)=>{
                const {
                    title,
                    price,
                    priceNote,
                    design,
                    pages,
                    admin,
                    description,
                    support,
                    contact,
                    basicSeo,
                    advancedSeo,
                    functions
                } = priceItem

                const priceItemId = priceItem.id
                const priceAmount = price?formatCurrency(price):priceNote
            
                return (
                  <article
                    key={priceItemId}
                    className="group relative"
                  >
                    <Link href={`/priceItems/${priceItemId}`}>
                      <Card
                        key={title}
                        className=" transform group-hover:shadow-xl transition-shadow duration-500"
                      >
                        <CardHeader>
                            <CardTitle className="text-center">{title}</CardTitle>
                        </CardHeader>
                                <h5 className="text-muted-foreground font-semibold text-center">{priceAmount}</h5>
                            <Separator />
                        <CardContent className="flex flex-col justify-between text-center text-muted-foreground">
                            <p>{design}</p>
                            <Separator />
                            <p>{pages}</p>
                            <Separator />
                            <p>{admin}</p>
                            <Separator />
                            <p>{description}</p>
                            <Separator />
                            <p>{support}</p>
                            <Separator />
                            <p>{contact}</p>
                            <Separator />
                            <p>{basicSeo}</p>
                            <Separator />
                            <p>{advancedSeo}</p>
                            <Separator />
                            <p>{functions}</p>
                        </CardContent>
                        <CardFooter />
                      </Card>
                    </Link>
                  </article>
                );
            })}
        </div>
    )
}

export default PriceCard