
import React from 'react'
import { Separator } from '@/components/ui/separator';

function ArchivePage() {
    return (
      <div>
        <div className="flex flex-col py-10">
          <div className="grid grid-flow-col grid-col-2 gap-14">
            {/* Left Side */}
            <div className="col-span-4">
              <div className="py-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo ligula, interdum ut lobortis quis, interdum vitae metus. Proin fringilla metus non nulla cursus, sit amet rutrum est pretium.</p>
              </div>
              <div>
                <h5 className="uppercase font-semibold">Last 20 posts</h5>
                <div className="mt-4 p-4">Post Contents</div>
              </div>
              <div>
                <h5 className="uppercase font-semibold">Archive by Month</h5>
                <div className="mt-4 p-4">Monthly Content</div>
              </div>
              <div>
                <h5 className="uppercase font-semibold">Archive by Category</h5>
                <div className="mt-4 p-4">Categories</div>
              </div>
            </div>


            {/* Right Side */}

            <div className="row-span-1 py-6 gap-4">
              <div className="py-2">
                <h6 className="uppercase font-semibold">About delivery theme</h6>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent justo ligula, interdum ut lobortis quis, interdum vitae metus. Proin fringilla metus non nulla cursus, sit amet rutrum est pretium.</p>
              </div>
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
              <div className="mt-4">
                <h6 className="uppercase font-semibold">Flicker widget</h6>

                <div className='flex flex-wrap gap-2 py-4'>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
                  <div className='h-15 w-15 bg-blue-500'></div>
               

                </div>
              </div>

              <div className="mt-4">
                <h6 className="uppercase font-semibold">Twitter widget</h6>
                <div>
                  <div className="my-2 py-4">
                    <p>
                      <span className="text-emerald-500">@pixeldude</span> What a great design that uses all the latest trends.
                    </p>
                    <p className="text-emerald-500">About 1 hr ago</p>
                  </div>
                  <Separator />
                  <div className="my-2 py-4">
                    <p>
                      <span className="text-emerald-500">@mjreimer</span> nice new theme!
                    </p>
                    <p className="text-emerald-500">About 6 hrs ago</p>
                  </div>
                  <Separator />
                  <div className="my-2 py-4">
                    <p>Time to try out some new design techniquies!</p>
                    <p className="text-emerald-500">Yesterday</p>
                  </div>
                  <Separator />
                  <div className="my-2 py-4">
                    <p>
                      Follow <span className="text-emerald-500">@bestpsdfreebies</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    );
}

export default ArchivePage