import React from 'react'
import { fetchOurTeam } from '@/utils/actions'
import TeamMember from './TeamMember'


async function OurTeamContainer() {
  const members =  await fetchOurTeam()
  return (
    <>
      <section className='flex flex-col justify-between'>
        <TeamMember members={members}/>
      </section>
    </>
  )
}

export default OurTeamContainer