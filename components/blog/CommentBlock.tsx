import React from 'react'
import { LiaCommentSolid } from "react-icons/lia";
function CommentBlock() {
  return (
     <div className='flex flex-row items-center justify-center p-2 gap-2 bg-gray-400'>
          <LiaCommentSolid />
          <h6>2 comments</h6>
        </div>
  )
}

export default CommentBlock