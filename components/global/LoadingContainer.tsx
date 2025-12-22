import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent } from '../ui/card'

function LoadingContainer() {
  return (
    <div className="flex flex-row gap-4 md:flex-cols-2 lg:flex-cols-3 pt-12  ">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );

  function LoadingProduct() {
    return (
      <Card className='h-80 w-1/3'>
        <CardContent className='p-4'>
          <Skeleton className='h-48 w-full' />
          <Skeleton className='h-4 w-3/4 mt-4' />
          <Skeleton className='h-4 w-1/4 mt-4' />
        </CardContent>
      </Card>
    )
  }
}

export default LoadingContainer