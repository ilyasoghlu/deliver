import React from 'react'
import { Separator } from "@radix-ui/react-separator";

function PopularPosts() {
    return (
        <div className="py-2">
        <h6 className="uppercase font-semibold">Popular posts</h6>
        <div className="mt-4">
            <p className="mb-2">New Premium WordPress Theme - Blaco</p>
            <Separator />
            <p className="mb-2">Top Web Trends of 2013</p>
            <Separator />
            <p className="mb-2">Video Post Example</p>
            <Separator />
            <p className="mb-2">How Important is Twitter</p>
            <Separator />
            <p>Home Builders New Planning Solution</p>
        </div>
        
        </div>
    );
}

export default PopularPosts