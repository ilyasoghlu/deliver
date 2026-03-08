import {OfferContent} from '@/components/global'
import PriceContent from '@/components/price/PriceContent'
import ServiceBlogContainer from '@/components/services/ServiceBlogContainer'
import ServiceContent from '@/components/services/ServiceContent'
import ServiceInfoContainer from '@/components/services/ServiceInfoContainer'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function ServicesPage() {
    return (
      <div>
        <ServiceContent />
        <Separator />
        <ServiceBlogContainer />
        <Separator />
        <PriceContent />
        <Separator />
        <ServiceInfoContainer />
        <Separator />
        <OfferContent text="Do you need a theme?" />
      </div>
    );
}

export default ServicesPage