
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Pagination } from '@/components/global';
import BlogContainer from '@/components/blog/BlogContainer';
import { PopularPosts } from '@/components/blog';
function BlogPage() {
    return (
        
            <div className="flex flex-col py-10">
            <div className="grid grid-row sm:grid-flow-col grid-col-2 sm:gap-x-4">
                <div className="col-span-4">
                <BlogContainer />
                <Separator />
                <Pagination />
                </div>

                {/* Sidebar Conetent */}
                <div className="col-span-1">
                    <PopularPosts />
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

export default BlogPage