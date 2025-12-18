import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
// import SectionTitle from '@/components/global/SectionTitle';
import { OfferContent } from '@/components/global';
import { Button } from '@/components/ui/button';

function ContactPage() {
    return (
      <div>
        <OfferContent text='we would like to hear from you!'>
            
            
          </OfferContent>
          <Separator />
        <div className="flex flex-col py-10">
          <div className="grid grid-row sm:grid-flow-col sm:grid-cols-2 gap-6">
            <form className="col-span-8">
              <h6>Contact from </h6>
              <Label className='uppercase'>
                name
              </Label>
              <Input type='text' name='name' required/>
              <Label className='uppercase'>
                email address
              </Label>
              <Input type='email' name='email' required/>
              <Label className='uppercase'>
                subject
              </Label>
              <Input type='text' name='text' required/>
              <Label className='uppercase'>
                message
              </Label>
              <Textarea />
              <Button
                type="button"
                variant="outline"
                className="bg-emerald-300 uppercase text-white my-6 py-4"
              >
                send message
              </Button>
            </form>
            <div>
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