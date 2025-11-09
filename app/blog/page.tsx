
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Pagination } from '@/components/global';
import MediaCard from '@/components/blog/MediaCard';
function BlogPage({text}:{text:string}) {
    return (
        <div>
            <div className="flex flex-col py-10">
            <div className="grid grid-row sm:grid-flow-col grid-col-2 sm:gap-x-4">
                <div className="col-span-4">
                    <MediaCard />
                    <Separator />
                    <MediaCard />
                    <Separator />
                    <MediaCard />
                    <Separator />
                    <MediaCard />
                    <Separator />
                <div className="flex flex-col items-start gap-2 p-2">
                    <div className="h-80 w-3/4">Image box</div>
                    <h5 className="uppercase text-muted-foreground">Basic Post with Featured Image</h5>
                    <div className="flex flex-row justify-between gap-6">
                    <div>Date Block</div>
                    <div>Creator Info</div>
                    <div>News Type</div>
                    <div>Comment Block</div>
                    </div>
                    <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisi eget lectus iaculis congue. Nullam eleifend congue turpis, vel scelerisque massa fermentum ac ... </p>
                </div>
                <Separator />
                <div className="flex flex-col items-start gap-2 p-2 mt-4">
                    <h5 className="uppercase text-muted-foreground">Basic Post with no Featured Image</h5>
                    <div className="flex flex-row justify-between gap-6">
                    <div>Date Block</div>
                    <div>Creator Info</div>
                    <div>News Type</div>
                    <div>Comment Block</div>
                    </div>
                    <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisi eget lectus iaculis congue. Nullam eleifend congue turpis, vel scelerisque massa fermentum ac ... </p>
            
                </div>
                <Separator />
                <div className="flex flex-col items-start gap-2 p-2 mt-4">
                    <div className="h-80 w-3/4">Video Content box</div>
                    <h5 className="uppercase text-muted-foreground">Video post example</h5>
                    <div className="flex flex-row justify-between gap-6">
                    <div>Date Block</div>
                    <div>Creator Info</div>
                    <div>News Type</div>
                    <div>Comment Block</div>
                    </div>
                    <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisi eget lectus iaculis congue. Nullam eleifend congue turpis, vel scelerisque massa fermentum ac ... </p>
                </div>
                <Separator />
                <div className="flex flex-col items-start gap-2 p-2 mt-4">
                    <div className="h-20 w-3/4">Audio player box</div>
                    <h5 className="uppercase text-muted-foreground">Audio clip post example</h5>
                    <div className="flex flex-row justify-between gap-6">
                    <div>Date Block</div>
                    <div>Creator Info</div>
                    <div>News Type</div>
                    <div>Comment Block</div>
                    </div>
                    <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisi eget lectus iaculis congue. Nullam eleifend congue turpis, vel scelerisque massa fermentum ac ... </p>
                </div>
                <Separator />
                <Pagination />
                </div>

                {/* Sidebar Conetent */}
                <div className="col-span-1">
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
                <div className="mt-4 py-2">
                    <h6 className="uppercase font-semibold">Blog categories</h6>
                    <div></div>
                </div>
                <div className="mt-4 py-2">
                    <h6 className="uppercase font-semibold">Archives</h6>
                    <div></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default BlogPage