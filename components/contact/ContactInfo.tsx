import React from 'react'

function ContactInfo() {
  return (
    <div className='flex flex-col'>
      <h6 className="uppercase font-bold ">contact information</h6>
      <div className='flex flex-col my-4'>
        <h5 className='capitalize font-bold'>email:</h5>
        <h5 className='capitalize font-bold'>Primary Phone:</h5>
        <h5 className='capitalize font-bold'>Alternate Phone:</h5>
        <h5 className='capitalize font-bold'>Fax:</h5>
      </div>
    </div>
  );
}

export default ContactInfo