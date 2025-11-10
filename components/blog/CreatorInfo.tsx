import React from 'react'
import { BsPerson } from "react-icons/bs";
function CreatorInfo({text}:{text:string}) {
  return (
     <div className='flex flex-row items-center justify-center p-2 gap-2 bg-gray-400'>
          <BsPerson />
          <h6>{text}</h6>
        </div>
  )
}

export default CreatorInfo