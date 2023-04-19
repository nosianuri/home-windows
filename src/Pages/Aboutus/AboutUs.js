import React from 'react'
import HomeHead from '../HomePage/HomeHead'
import HoomFooter from '../HomePage/HoomFooter'
import WhoWith from '../HomePage/WhoWith'
import AboutBanner from './AboutBanner'
import AboutService from './AboutService'
import Professional from '../HomePage/Professional'
import WhyChoose from '../HomePage/WhyChoose'
import AboutFaq from './AboutFaq'

const AboutUs = () => {
  return (
    <div>
        <HomeHead />
        <AboutBanner />
        <AboutService />
        <Professional />
        <WhoWith />
        <WhyChoose />
        <AboutFaq />
        <HoomFooter />
    </div>
  )
}

export default AboutUs