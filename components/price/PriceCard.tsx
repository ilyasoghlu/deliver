import React from 'react'
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from '../ui/card'
import { Separator } from '../ui/separator'
import priceItems from '@/prisma/priceList.json'
import { formatCurrency } from '@/utils/format'
import Link from 'next/link'


// helper for label formatting
const formatLabel = (text) =>
  text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())


function PriceCard() {

    return (

        <div className='py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>

            {priceItems.map((priceItem) => {

                const { title, price, priceNote } = priceItem

                const priceItemId = title
                const priceAmount = price
                    ? formatCurrency(price)
                    : priceNote

                return (

                    <article
                        key={priceItemId}
                        className="group relative"
                    >

                        <Link href={`/priceItems/${priceItemId}`}>

                            <Card
                                className="transform group-hover:shadow-xl transition-shadow duration-500 h-98"
                            >

                                <CardHeader>
                                    <CardTitle className="text-center">
                                        {title}
                                    </CardTitle>
                                </CardHeader>

                                <h5 className="text-muted-foreground font-semibold text-center">
                                    {priceAmount}
                                </h5>

                                <Separator />

                                <CardContent className="flex flex-col text-center text-muted-foreground">

                                    {Object.entries(priceItem).map(([key, value]) => {

                                        // skip fields already used
                                        const excludedFields = [
                                            "title",
                                            "price",
                                            "priceNote"
                                        ]

                                        if (excludedFields.includes(key)) return null

                                        // skip empty values
                                        if (!value) return null

                                        return (

                                            <React.Fragment key={key}>

                                                <p>

                                                    {typeof value === "boolean"
                                                        ? formatLabel(key)
                                                        : value
                                                    }

                                                </p>

                                                <Separator />

                                            </React.Fragment>

                                        )

                                    })}

                                </CardContent>

                                <CardFooter />

                            </Card>

                        </Link>

                    </article>

                )

            })}

        </div>

    )

}

export default PriceCard