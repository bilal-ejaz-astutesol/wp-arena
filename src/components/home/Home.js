import React from 'react';
import HeroBaneer from '../hero-banner/HeroBanner';
import Timeline from '../timeline/Timeline';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';

const Home = () => {
  const isShowDis=true;
  return (
    <>
      <HeroBaneer />
      <TimelineFilterTabs />
      <Timeline />
      <QuizBanner />
      <ProServices  />
      <FeaturedProducts />
      <CouponsAndDeals showDis={isShowDis}   />
    </>
  )
}

export default Home
