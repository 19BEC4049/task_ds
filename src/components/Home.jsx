import React from 'react'
import Layout1 from './homelayouts/Layout1'
import SpecialOffer  from './homelayouts/SpecialOffer'
import PricingSection from './homelayouts/PricingSection'
import Layout4 from './homelayouts/Layout4'
import LearningJourney from './homelayouts/LearningJourney'
import FaqSection from './homelayouts/Faq'
import MyComponent from './homelayouts/MyComponent'

function Home() {
  return (
    <div>
        <Layout1/>
        <SpecialOffer/>
        <PricingSection/>
        <Layout4/>
        <LearningJourney/>
        <FaqSection/>
      <MyComponent/>

    </div>
  )
}

export default Home