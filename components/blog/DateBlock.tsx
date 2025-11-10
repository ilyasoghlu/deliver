import React from 'react'
import { CiCalendarDate } from "react-icons/ci";

function DateBlock({date}:{date:Date}) {
  return (
    <div className='flex flex-row items-center justify-center p-2 gap-2 bg-gray-400'>
      <CiCalendarDate />
      <h6>{date.toLocaleDateString()}</h6>
    </div>
  )
}

export default DateBlock