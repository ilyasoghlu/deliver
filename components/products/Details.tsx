import React from 'react'
import { Separator } from '../ui/separator'
import { SectionTitle } from '../global'
import { Button } from '../ui/button'

function Details() {
    return (
        <div>
            <div>
                Product Details
                <div>Image</div>
                <div>
                    Info
                    <div>Title</div>
                    <div>Details</div>
                    <div>Info</div>
                </div>
            </div>
            <Separator />
            <div>
                Share buttons
            </div>
            <div>
                <SectionTitle text='Comments' />
                <Separator />
                Comments 
            </div>
            <div>
                <SectionTitle text='Leave a comment' />
                <Separator />

                
                <Button>
                    send a message
                </Button>
            </div>
        </div>
    )
}

export default Details