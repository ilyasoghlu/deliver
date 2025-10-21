import {OfferContent} from '@/components/global'
import PriceContent from '@/components/price/PriceContent'
import ServiceContent from '@/components/services/ServiceContent'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function ServicesPage() {
    return (
        <div>
            <ServiceContent />
            <Separator />
            <PriceContent />
            <Separator />
            <div>
                here will be info block
            </div>
            <OfferContent text='Do you need a theme?' />
            
        </div>
    )
}

export default ServicesPage