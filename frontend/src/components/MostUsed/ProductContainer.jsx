import React from 'react'
import { Link } from 'react-router-dom'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductContainer = ({displayItems, title}) => {
  let settingsOFCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }
  return (
    <div className='w-[88vw] mx-auto h-[18em] bg-white p-2 mb-5'>
      <div className='text-[1.5em] font-bold'>{title}</div>
      <Slider {...settingsOFCarousel}>
        {displayItems.map((item, i) => <Link className='px-3' to={item.Link} key={i}>
            <img src={item.image} alt="" />
        </Link>)}
      </Slider>
    </div>
  )
}

export default ProductContainer