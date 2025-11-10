import React from 'react'

function MediaBlockTitle({text}:{text:string}) {
  return (
    <>
        <h5 className="uppercase font-semibold text-muted-foreground my-2">{text}</h5>
    </>
  )
}

export default MediaBlockTitle