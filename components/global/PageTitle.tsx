import React from 'react'

function PageTitle({ text }: { text: string }) {
  return <div className='flex items-start bg-[()]'>
    <h1 className='uppercase font-bold'>{text}</h1>
  </div>;
}

export default PageTitle