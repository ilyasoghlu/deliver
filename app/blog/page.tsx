
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { PageTitle, Pagination } from '@/components/global';
function BlogPage() {
    return (
        <div>
            <PageTitle text="blog" />
            <div className="flex flex-col py-10">
            <div className="grid grid-row sm:grid-flow-col grid-col-2">
                <div className="col-span-4">
                here will be our video audio blogs
                <Separator />
                <Pagination />
                </div>
                
                <div className="col-span-1">
                <div>Popular posts</div>
                <div>Blog categories</div>
                <div>Archives</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default BlogPage