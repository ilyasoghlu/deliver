import React from 'react'
import { Separator } from '../ui/separator'
import { SectionTitle } from '../global'
import ServiceBlogContainer  from './ServiceBlogContainer'
function ServiceContent() {
  return (
    <>
        <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
                        <SectionTitle text="Check out our awesome services" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
            </div>
            <Separator />
            
                <ServiceBlogContainer />
            
    </>
  )
}

export default ServiceContent