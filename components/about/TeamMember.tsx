import React from 'react'
import { Card, CardContent, CardDescription } from '../ui/card'
import Image from 'next/image'
import { OurTeam } from '@prisma/client'

function TeamMember({members}:{members:OurTeam[]}) {
  
  return (
    <>
    {
      members.map((member) =>{
        const {firstName, lastName, position, description, image} = member
        const memberId = member.id 
        return (
          <article key={memberId} className='group relative'>
          <Card
            className="transform 
            group-hover:shadow-xl 
            transition-shadow 
            duration-500"
            >
            <CardContent className="p-4">
              <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                <Image
                  src={image}
                  alt={firstName}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  priority
                  className="rounded 
                  w-full 
                  object-cover 
                  transform 
                  group-hover:scale-110 
                  transition-transform 
                  duration-500"
                  />
                </div>
                <div className='mt-4 text-center' >
                  <h3>
                    {firstName} {lastName}
                  </h3>
                  <h4>{position}</h4>
                  <p>{description}</p>
                </div>
              <CardDescription />
            </CardContent>
          </Card>
        </article>
        );
      })
    }
    </>
  )
}

export default TeamMember