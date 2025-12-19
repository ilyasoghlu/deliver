import React from 'react'
import { Separator } from '@/components/ui/separator';

import SectionTitle from '@/components/global/SectionTitle';
import { OfferContent } from '@/components/global';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact/ContactForm';
import Location from '@/components/contact/Location';
import ContactInfo from '@/components/contact/ContactInfo';
import WorkHours from '@/components/contact/WorkHours';

function ContactPage() {
    return (
      <div>
        <div className='flex flex-wrap items-center justify-center text-center mb-8'>
          <SectionTitle text="we would like to hear from you!" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia animi commodi ut sit porro quasi accusantium doloremque ratione at modi exercitationem in iusto optio aliquam facere fugiat, numquam excepturi.</p>
        </div>
        <Separator />
        <div className="flex flex-col py-10">
          <div className="grid grid-row sm:grid-flow-col sm:grid-cols-2 gap-6">
            <div className="sm:col-span-8">
              <ContactForm />
            </div>
            <div className="sm:col-span-4">
              <Location />
              <ContactInfo />
              <WorkHours />
            </div>
          </div>
          <Separator />
          <OfferContent text="do you need a theme?">
            <Button
              type="button"
              variant="outline"
              className="bg-emerald-300 uppercase text-white my-6 py-4"
            >
              purchase
            </Button>
          </OfferContent>
        </div>
      </div>
    );
}

export default ContactPage