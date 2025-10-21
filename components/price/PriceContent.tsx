import React from 'react'
import PriceCard from './PriceCard'
import { SectionTitle } from '../global'
function PriceContent() {
    return (
        <>
        <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
                            <SectionTitle text="pricing table example" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
                </div>
                <div>
                    <PriceCard />
                </div>
        </>

    )
}

export default PriceContent