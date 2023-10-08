import React from 'react'

import "./CardContainer.css"

import Card from './CardContainer/Card'

const CardContainer = () => {
    const displayItems = [
        {title:"Gaming accessories", },
        {title:"Toys Under $30", },
        {title:"Electronics", },
        {title:"Sign in ", },
        {title:"Home & Kitchen Under $30", },
        {title:"Health & Personal Care", },
        {title:"Refresh your space", },
        {title:"Shop deals in Fashion", },
    ]
  return (
    <div className='w-[90vw] mx-auto card-container'>
        {displayItems.map((item, i) => <Card key={i} title={item.title} />)}
    </div>
  )
}

export default CardContainer