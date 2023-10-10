import React from 'react'

import { Link } from 'react-router-dom'

const DiscountCard = ({link, image, price, name}) => {
  return (
    <div>
       <Link to={link}>
          <div className="flex flex-col mb-3">
            <img src={image} alt={`${name} image`} className='w-[6em] h-[10em]' />
          </div>
            <span className='no-underline text-black'>{price} $</span>
       </Link>
    </div>
  )
}

export default DiscountCard