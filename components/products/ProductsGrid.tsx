import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Product } from '@prisma/client'
import { formatCurrency } from '@/utils/format'
import Link from 'next/link'

function ProductsGrid({products}:{products:Product[]}) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map((product) =>{
          const {name, price, image} = product
          const productId = product.id
          const dollarAmount = formatCurrency (price)
          return (
            <article key={productId} className='group relative'>
              <Link href={`/products/${productId}`}>
                <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                  <CardContent className='p-4'>

                  </CardContent>
                </Card>
              </Link>
            </article>
          )
        })
      }
    </div>
  )
}

export default ProductsGrid