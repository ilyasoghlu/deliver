import React from 'react'
import { CiBookmarkCheck } from "react-icons/ci";
function NewsType() {
  return (
     <div className='flex flex-row items-center justify-center p-2 gap-2 bg-gray-400'>
          <CiBookmarkCheck /> 
          <h6>Marketing News</h6>
        </div>
  )
}

export default NewsType