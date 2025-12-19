import React from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';

function ContactForm() {
    return (
        <>
        <h6 className="uppercase font-bold">Contact from </h6>
        <form className='my-4'>
            <Label className="uppercase">name</Label>
            <Input
            type="text"
            name="name"
            required
            />
            <Label className="uppercase">email address</Label>
            <Input
            type="email"
            name="email"
            required
            />
            <Label className="uppercase">subject</Label>
            <Input
            type="text"
            name="text"
            required
            />
            <Label className="uppercase">message</Label>
            <Textarea />
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