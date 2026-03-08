import React from 'react'
import ServiceInfoCard from './ServiceInfoCard'
import { fetchAllServiceInfo } from '@/utils/actions'

async function ServiceInfoContainer() {
  const info = await fetchAllServiceInfo()
  return (
    <div className='flex flex-row flex-wrap gap-2 p-8'>
        <ServiceInfoCard info={info} />
    </div>
  )
}

export default ServiceInfoContainer