import React from 'react'
import HomeHead from '../HomePage/HomeHead'
import HoomFooter from '../HomePage/HoomFooter'
import WhoWith from '../HomePage/WhoWith'
import AboutBanner from './AboutBanner'

const AboutUs = () => {
  return (
    <div>
        <HomeHead />
        <AboutBanner />
        
        <WhoWith />
        <HoomFooter />
    </div>
  )
}

export default AboutUs