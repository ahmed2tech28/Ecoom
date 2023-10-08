import React from 'react'
import { Link } from 'react-router-dom'

const ProductContainer = ({displayItems}) => {
  return (
    <div className='w-[88vw] mx-auto h-[15em] bg-white overflow-x-auto flex items-center px-3'>
        {displayItems.map((item, i) => <Link className='px-3' to={item.Link} key={i}>
            <img src={item.image} alt="" />
        </Link>)}
    </div>
  )
}

export default ProductContainer