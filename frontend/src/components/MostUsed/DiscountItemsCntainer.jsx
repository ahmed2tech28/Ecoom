import React from 'react'

import Slider from "react-slick";

import DiscountCard from './DiscountCardContainer/DiscountCard'

const DiscountItemsCntainer = ({title, displayItems}) => {
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
    <div className='w-[88vw] mx-auto h-[18em] bg-white p-2 my-3'>
      <div className='text-[1.5em] font-bold'>{title}</div>
      <Slider {...settingsOFCarousel}>
        {displayItems.map((item, i) => <DiscountCard key={i} link={item.link} image={item.image} price={item.price} name={item.name} />)}
      </Slider>
    </div>
  )
}

export default DiscountItemsCntainer