import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({title, image, btn_text}) => {
  return (
    <div className='bg-white w-[21vw] h-[27em] m-3 p-3' style={{zIndex:"1"}}>
        <div className="hiding font-semibold text-[1.5em]">{title}</div>
        {title=="Sign in" ? <div className='my-3'>
          <Link to={"/signin"} style={{background:"rgb(255, 216, 20)"}} className='py-2 my-16 px-[40%] no-underline text-black'>Sign in</Link>
        </div> : <div>
          <div>
            <img src={image} alt={title} style={{height:"325px"}}/>
          </div>
          <div className='mt-3'>
            <Link to={"/"} className='no-underline text-[13px]'>{btn_text}</Link>
          </div>
        </div>}
        
    </div>
  )
}

export default Card