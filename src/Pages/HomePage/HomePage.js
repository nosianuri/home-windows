import React, { useEffect, useState } from 'react';
import HomeHead from './HomeHead';
import HomeBanner from './HomeBanner';
import Professional from './Professional';
import WhyChoose from './WhyChoose';
import HomeReview from './HomeReview';
import HoomFooter from './HoomFooter';
import HowWork from './HowWork';
import ComProject from './ComProject';
import WhoWith from './WhoWith';
import BackgroundSlider from './BackgroundSlider';
import HomeNav from './HomeNav';
import HomeTop from './HomeTop';
import HomeHero from './HomeHero';
import { Helmet } from 'react-helmet';
import Mloader from '../../Shared/Mloader';

const HomePage = () => {
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
        <title>Terms | Mr Home Service</title>
      </Helmet>
      {isLoading ? (
        <Mloader />
      ) : (
        <div>
          <HomeHead />
          <HomeHero />
          <Professional />
          <WhyChoose />
          <ComProject />
          <HowWork />
          <WhoWith />
          <HomeReview />
          <HoomFooter />
        </div>
      )}
    </>
  )
}

export default HomePage