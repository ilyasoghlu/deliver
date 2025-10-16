import React from 'react'
import SectionTitle from './SectionTitle'

function OfferContent({text, children}:{text:string, children?:React.ReactNode}) {
  return (
    <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
        <SectionTitle text={text} />
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
        {children}       
      </div>
  )
}

export default OfferContent