import {PageTitle, SectionTitle} from '@/components/global'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function ServicesPage() {
    return (
        <div>
            <PageTitle text='services' />
            <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
                        <SectionTitle text="Check out our awesome services" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
            </div>
            <Separator />
            <div>
                here will be service tabs
            </div>
            <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
                        <SectionTitle text="pricing table example" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
            </div>
            <div>
                here will be price block 
            </div>
            <Separator />
            <div>
                here will be info block
            </div>
            <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
                        <SectionTitle text="Do you need a theme " />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
            </div>
        </div>
    )
}

export default ServicesPage