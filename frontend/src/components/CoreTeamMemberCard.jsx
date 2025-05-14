import React from 'react'

const CoreTeamMemberCard = (props) => {
    const { name, position, image } = props
  return (
    <div className='flex w-52  gap-5 items-center px-2 py-4 border rounded-md shadow-md'>
        <div>
            <img src={image} alt="Image" />
        </div>
        <div>
            <p className="text-base font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{position}</p>
        </div>
    </div>
  )
}

export default CoreTeamMemberCard