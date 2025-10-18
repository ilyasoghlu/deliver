import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
// import SectionTitle from '@/components/global/SectionTitle';
import { OfferContent } from '@/components/global';



function ContactPage() {
    return (
      <div>
      
        <div className="flex flex-col py-10">
          <div className="grid grid-row sm:grid-flow-col sm:grid-cols-2">
            <form className="col-span-4">
              <h6>Contact from </h6>
              Here will be form components 
              <Button
                type="button"
                variant="outline"
                className="bg-emerald-300 uppercase text-white my-6 py-4"
              >
                send message
              </Button>
            </form>
            <div className="row-span-1">
              <div className="flex flex-col flex-wrap">
                <h6 className="uppercase font-bold ">Our Location</h6>
                <div className="py-5">
                  <p>We just moved to our new location down the block right beside Subway.</p>
                  <p>#9 - 3815 Thatcher Avenue Saskatoon, Saskatchewan S7R 1A3</p>
                </div>
              </div>
              <div>
                <h6 className="uppercase font-bold ">contact information</h6>
              </div>
              <div>
                <h6 className="uppercase font-bold ">Office hours</h6>
                <ul className="py-5">
                  <li>Monday - Friday 8 am - 5 pm</li>
                  <li>Saturday - Sunday Closed </li>
                  <li>Holidays - Closed </li>
                </ul>
                <p>* Feel free to email or call us after hours </p>
              </div>
            </div>
          </div>
          <Separator />
          <OfferContent text='do you need a theme?'>
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