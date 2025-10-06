import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function NewsLetter() {
  return (
    <div>
      <h6 className='mb-8'>NewsLetter</h6>
      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio!</p>
      <div className='flex flex-row'>
        <Input type='email' placeholder='email' className='hover:bg-muted-foreground' />
        <Button 
          type='submit'
          className='bg-gray-500 mx-2'

        >ok</Button>
      </div>
    </div>
  )
}

export default NewsLetter