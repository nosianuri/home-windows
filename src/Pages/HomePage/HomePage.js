import React from 'react'
import HomeHead from './HomeHead'
import HomeBanner from './HomeBanner'
import Professional from './Professional'
import OurService from './OurService'
import ExpertHome from './ExpertHome'
import WhyChoose from './WhyChoose'
import HomeReview from './HomeReview'
import HoomFooter from './HoomFooter'

const HomePage = () => {
  return (
    <div>
        <HomeHead />
        <HomeBanner />
        <Professional />
        <WhyChoose />
        <HomeReview />
        <HoomFooter />
    </div>
  )
}

export default HomePage