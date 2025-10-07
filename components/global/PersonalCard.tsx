import React from 'react'
import { Separator } from '../ui/separator'
import SocialLinks from '../navbar/SocialLinks';

function PersonalCard({ name, position, info }: { name: string, position:string, info:string }) {
  return (
    <div className='flex flex-col w-1/4 gap-4 py-8'>
      <img
        src="image"
        alt="image"
      />
      <h5>{name}</h5>
      <h6>{position}</h6>
      <Separator />
      <p>{info}</p>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default PersonalCard