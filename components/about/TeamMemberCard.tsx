import React from 'react'
import { Card, CardContent, CardDescription } from '../ui/card'
import Image from 'next/image'
import { OurTeam } from '@prisma/client'
import Link from 'next/link'

function TeamMemberCard({members}:{members:OurTeam[]}) {
  
  return (
    <>
    {
      members.map((member) =>{
        const {firstName, lastName, position, description, image} = member
        const memberId = member.id 
        return (
          <article 
            key={memberId} 
            className='group relative w-full md:w-[24%]' >
              <Link href={`/about/${memberId}`}>
          <Card
            className="transform 
            group-hover:shadow-xl 
            transition-shadow 
            duration-500
            "
            >
            <CardContent className="p-4">
              <div className="relative h-64 w-60 md:h-48 rounded overflow-hidden ">
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
                  <h2 className='font-bold'>
                    {firstName} {lastName}
                  </h2>
                  <h5>{position}</h5>
                  <p className='text-muted-foreground'>{description}</p>
                </div>
              <CardDescription />
            </CardContent>
          </Card>
          </Link>
        </article>
        );
      })
    }
    </>
  )
}

export default TeamMemberCard