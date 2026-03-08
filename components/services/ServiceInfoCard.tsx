import { ServiceInfo } from '@prisma/client'
import React from 'react'

function ServiceInfoCard({info}:{info:ServiceInfo[]}) {
  return (
    <>
      {
        info.map((infoItem) =>{
          const {id, title, info} = infoItem
          return(
            <article key={id}
                      className='w-full md:w-[32%] p-2'
            >
              <h3 className='uppercase font-bold mb-4'>{title}</h3>
              <p className='text-muted-foreground'>{info}</p>
            </article>
          )
        })
      }
    </>
  )
}

export default ServiceInfoCard