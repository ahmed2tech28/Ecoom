import React from 'react'

import Mycarousel from './Home/Mycarousel'
import CardContainer from './MostUsed/CardContainer'

const Home = () => {
    document.title = "Amazon.com. Spend less. Smile more."
  return (
    <div>
      <Mycarousel/>
      <CardContainer/>
    </div>
  )
}

export default Home