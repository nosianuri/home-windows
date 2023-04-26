import React, { useEffect, useState } from 'react'
import HomeHead from '../HomePage/HomeHead'
import HoomFooter from '../HomePage/HoomFooter'
import WhoWith from '../HomePage/WhoWith'
import AboutBanner from './AboutBanner'
import AboutService from './AboutService'
import Professional from '../HomePage/Professional'
import WhyChoose from '../HomePage/WhyChoose'
import AboutFaq from './AboutFaq'
import Mloader from '../../Shared/Mloader'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Mr Home Service</title>
      </Helmet>
      {isLoading ? (
        <Mloader />
      ) : (
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
    )}
    </>
  )
}

export default AboutUs