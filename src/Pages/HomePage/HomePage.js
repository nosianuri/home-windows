import React from 'react';
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

const HomePage = () => {
  return (
    <div>
      <HomeHead />
      {/* <HomeTop /> */}
      {/* <BackgroundSlider /> */}
      <HomeHero />
      <Professional />
      <WhyChoose />
      <ComProject />
      <HowWork />
      <WhoWith />
      <HomeReview />
      <HoomFooter />
    </div>
  )
}

export default HomePage