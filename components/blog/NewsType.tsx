import React from 'react'
import { CiBookmarkCheck } from "react-icons/ci";
function NewsType({text}:{text:string}) {
  return (
     <div className='flex flex-row items-center justify-center p-2 gap-2 bg-gray-400'>
          <CiBookmarkCheck /> 
          <h6>{text}</h6>
        </div>
  )
}

export default NewsType