import React from 'react'
import PageTitle from '@/components/global/PageTitle'
import SectionTitle from '@/components/global/SectionTitle'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import BreadCrumbs from '@/components/global/BreadCrumbs';



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
                <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
                    <SectionTitle text="do you need a website?" />
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
                    <Button
                    type="button"
                    variant="outline"
                    className="bg-emerald-300 uppercase text-white my-6 py-4"
                    >
                    get a free quote
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage