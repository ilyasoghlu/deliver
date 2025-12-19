import {OfferContent, PersonalCard, SectionTitle } from '@/components/global'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator'
import React from 'react'

function AboutPage() {
    return (
        <div>
            <div className="flex flex-col flex-wrap  items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
            <SectionTitle text="we are a small team doing big things!" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
            </div>
            <Separator />
            <div className="flex sm:flex-row sm:justify-between  flex-col justify-center items-center py-12 gap-12 text-muted-foreground">
            <article className="sm:w-1/3 w-full">
                <h5 className="uppercase font-bold mb-6">mission statement</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti nihil, velit asperiores officia dolorum voluptates temporibus maiores, necessitatibus neque dolore esse autem eius blanditiis nesciunt. Aliquam enim debitis quaerat mollitia ea fugit, quia numquam.</p>
            </article>
            <article className="sm:w-1/3 w-full">
                <h5 className="uppercase font-bold mb-6">core values</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti nihil, velit asperiores officia dolorum voluptates temporibus maiores, necessitatibus neque dolore esse autem eius blanditiis nesciunt. Aliquam enim debitis quaerat mollitia ea fugit, quia numquam.</p>
            </article>
            <article className="sm:w-1/3 w-full">
                <h5 className="uppercase font-bold mb-6">why choose us</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti nihil, velit asperiores officia dolorum voluptates temporibus maiores, necessitatibus neque dolore esse autem eius blanditiis nesciunt. Aliquam enim debitis quaerat mollitia ea fugit, quia numquam.</p>
            </article>
            </div>
            <div className='flex flex-col text-center text-muted-foreground py-8'>
                <div>
                    <SectionTitle text='meet our team' />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatibus error est modi. Quod illo, optio maxime tempore vel, quidem soluta possimus ea sit assumenda cumque? Voluptatum, quo.</p>
                </div>
                <div className='flex flex-row'>
                    <PersonalCard name='Olivander' position='President' info='lorem moremghsiunr dhbhncudbn ajajrbsssbb s'/>
                    <PersonalCard name='Olivander' position='President' info='lorem moremghsiunr dhbhncudbn ajajrbsssbb s'/>
                    <PersonalCard name='Olivander' position='President' info='lorem moremghsiunr dhbhncudbn ajajrbsssbb s'/>
                    <PersonalCard name='Olivander' position='President' info='lorem moremghsiunr dhbhncudbn ajajrbsssbb s'/>
                </div>
            </div>
            <OfferContent text='if you like what you see, join us!'>
                <Button
                    type="button"
                    variant="outline"
                    className="bg-emerald-300 uppercase text-white my-6 py-4"
                    >
                    apply now
                </Button>
            </OfferContent>
            
        </div>
    );
}

export default AboutPage