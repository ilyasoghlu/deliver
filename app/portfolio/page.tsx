import React from 'react'
import PageTitle from '@/components/global/PageTitle'
import SectionTitle from '@/components/global/SectionTitle'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import BreadCrumbs from '@/components/global/BreadCrumbs';
import { OfferContent } from '@/components/global';



function PortfolioPage() {
    return (
        <div>
            <PageTitle text="portfolio" />
            <div className="flex flex-col py-10 text-center text-muted-foreground">
                <div className="flex flex-col py-10">
                    <SectionTitle text="nothing but the best for our portfolio" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia animi commodi ut sit porro quasi accusantium doloremque ratione at modi exercitationem in iusto optio aliquam facere fugiat, numquam excepturi.</p>
                </div>
                <Separator />
                <BreadCrumbs />
                <div className='py-15'>
                    here will be product cards
                </div>
                <Separator />
                <OfferContent text='do you need a website?'>
                    <Button
                    type="button"
                    variant="outline"
                    className="bg-emerald-300 uppercase text-white my-6 py-4"
                    >
                    get a free quote
                    </Button>
                </OfferContent>
               
            </div>
        </div>
    );
}

export default PortfolioPage