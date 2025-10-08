import PageTitle from '@/components/global/PageTitle'
import React from 'react'
import { Separator } from '@/components/ui/separator';

function ArchivePage() {
    return (
      <div>
        <PageTitle text="archive" />
        <div className="flex flex-col py-10">
          <div className="grid grid-flow-col grid-col-2">
            <div className="col-span-4">
              <div>Last 20 posts</div>
              <div>Archive by Month</div>
              <div>Archive by Category</div>
            </div>
            <div className="row-span-1">
              <div>About delivery theme</div>
              <div>Popular posts</div>
              <div>Flicker widget</div>
              <div>Twitter widget</div>
            </div>
          </div>
          <Separator />
          
        </div>
      </div>
    );
}

export default ArchivePage