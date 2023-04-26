import React, { useEffect, useState } from 'react'
import HomeHead from '../HomePage/HomeHead'
import HoomFooter from '../HomePage/HoomFooter'
import WhyUsBanner from './WhyUsBanner'
import WhyUsBody from './WhyUsBody'
import Mloader from '../../Shared/Mloader'
import { Helmet } from 'react-helmet'

const WhyUs = () => {
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
        <title>Why Choose Us | Mr Home Service</title>
      </Helmet>
      {isLoading ? (
        <Mloader />
      ) : (
        <div>
          <HomeHead />
          <WhyUsBanner />
          <WhyUsBody />
          <HoomFooter />
        </div>
      )}
    </>
  )
}

export default WhyUs