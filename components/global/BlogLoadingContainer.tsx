import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent } from '../ui/card'

function BlogLoadingContainer() {
  return (
    <div className='pt-12 grid gap-4'>
      <LoadingProduct />
    </div>
  )

  function LoadingProduct() {
    return (
      <Card >
        <CardContent className='p-4'>
          <Skeleton className='h-48 w-full' />
          <Skeleton className='h-4 w-3/4 mt-4' />
          <Skeleton className='h-4 w-1/4 mt-4' />
        </CardContent>
      </Card>
    )
  }
}

export default BlogLoadingContainer