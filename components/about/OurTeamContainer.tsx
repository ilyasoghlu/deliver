import React from 'react'
import { fetchOurTeam } from '@/utils/actions'
import TeamMemberCard from './TeamMemberCard'


async function OurTeamContainer() {
  const members =  await fetchOurTeam()
  return (
      <section className='flex flex-wrap flex-col sm:flex-row justify-between pt-12  gap-4 w-full'>
        <TeamMemberCard members={members}/>
      </section>
  )
}

export default OurTeamContainer