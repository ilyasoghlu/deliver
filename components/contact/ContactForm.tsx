import React from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';

function ContactForm() {
    return (
        <>
            <h6 className="uppercase font-bold">Contact from</h6>
            <form className="my-4 sm:w-2/3">
            <div className='my-4'>
                <Label className="uppercase mb-4">
                    name<span className="text-red-700">*</span>
                </Label>
                <Input
                    type="text"
                    name="name"
                    required
                />
            </div>
            <div className='my-4'>
                <Label className="uppercase mb-4">
                    email address<span className="text-red-700">*</span>
                </Label>
                <Input
                    type="email"
                    name="email"
                    required
                />
            </div>
            <div className='my-4'>    
                <Label className="uppercase mb-4">
                    subject<span className="text-red-700">*</span>
                </Label>
                <Input
                    type="text"
                    name="text"
                    required
                />
            </div>
            <div className='my-4'>    
                <Label className="uppercase mb-4">
                    message<span className="text-red-700">*</span>
                </Label>
                <Textarea />
            </div>
                <Button
                    type="button"
                    variant="outline"
                    className="bg-emerald-300 uppercase text-white my-6 py-4"
                >
                send message
            </Button>
            </form>
        </>
    );
}

export default ContactForm