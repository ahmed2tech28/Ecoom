import React from 'react'

import "./CardContainer.css"

import Card from './CardContainer/Card'

const CardContainer = ({pos, displayItems}) => {
  return (
    <>
    {pos ? <div className='w-[90vw] mx-auto card-container'>
        {displayItems.map((item, i) => <Card key={i} title={item.title} image={item.image} btn_text={item.btn_text} />)}
    </div> : <div className='w-[90vw] mx-auto card-container-2'>
        {displayItems.map((item, i) => <Card key={i} title={item.title} image={item.image} btn_text={item.btn_text} />)}
    </div> }
    </>
  )
}

export default CardContainer