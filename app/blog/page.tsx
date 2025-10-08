import PageTitle from '@/components/global/PageTitle'
import React from 'react'
import { Separator } from '@/components/ui/separator';
function BlogPage() {
    return (
      <div>
        <PageTitle text="blog" />
        <div className="flex flex-col py-10">
          <div className="grid grid-flow-col grid-col-2">
            <div className="col-span-4">
             here will be our video audio blogs
            </div>
            <div className="row-span-1">
              <div>Popular posts</div>
              <div>Blog categories</div>
              <div>Archives</div>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    );
}

export default BlogPage