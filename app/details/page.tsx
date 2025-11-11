
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Pagination } from '@/components/global';
import BlogContainer from '@/components/blog/BlogContainer';
function BlogDetailsPage() {
    return (
        
            <div className="flex flex-col py-10">
            <div className="grid grid-row sm:grid-flow-col grid-col-2 sm:gap-x-4">
                <div className="col-span-4">
                <BlogContainer />
                <Separator />
                here will be social media likes 
                <Separator />
                Comments
                <Separator />
                Here will be comment cards 
                <Separator />
                Leave A Comment
                <Separator />
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
        
    );
}

export default BlogDetailsPage