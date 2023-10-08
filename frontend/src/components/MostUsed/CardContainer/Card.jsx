import React from 'react'

const Card = ({title}) => {
  return (
    <div className='bg-white w-[21vw] h-[25em] m-3 p-3'>
        <div className="hiding font-semibold text-[1.5em]">{title}</div>
        
    </div>
  )
}

export default Card