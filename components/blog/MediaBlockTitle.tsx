import React from 'react'

function MediaBlockTitle({text}:{text:string}) {
  return (
    <div>
        <h5 className="uppercase text-muted-foreground">{text}</h5>
    </div>
  )
}

export default MediaBlockTitle