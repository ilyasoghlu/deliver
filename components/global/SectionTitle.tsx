import React from 'react'

function SectionTitle({text}:{text:string}) {
  return (
    <div>
        <h2 className='text-3xl font-medium tracking-wider uppercase'>{text}</h2>
    </div>
  )
}

export default SectionTitle