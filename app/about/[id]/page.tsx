import React from 'react'

import { fetchMemberDetails } from '@/utils/actions'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'


async function MemberDetailsPage({params}:{params:{id:string}}) {
  const member = await fetchMemberDetails(params.id)

  
  const { 
    firstName, 
    lastName, 
    description, 
    position, 
    image, 
    experiences = [], 
    projects = [], 
    skills = [] 
  } = member;
  

  const  [
    {
      title: experiencesTitle,
      company,
      from,
      to 
    } = {},
  ] = experiences

  const [{
    title: projectTitle,
    projectInfo,
    projectLink
  } = {}
] = projects

const [{
  title: skillsTitle
} = {}
] = skills


  return (
    <section className='p-6'>
      <div className="flex flex-col">
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={firstName}
            fill
            sizes=" (max-width:768px) 100vw,
                        (max-width:1200px) 50vw, 33vw "
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* Member Content */}
        <div>
          <h1 className='font-bold'>{firstName} {lastName}</h1>
          <h2>{position}</h2>
          <p>{description}</p>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default MemberDetailsPage