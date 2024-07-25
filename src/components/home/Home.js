import React from 'react';
import HeroBaneer from '../hero-banner/HeroBanner';
import Timeline from '../timeline/Timeline';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import { useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const isShowDis=true;
  return (
    <>
      <HeroBaneer />
      <TimelineFilterTabs />
      <Timeline posts={posts} />
      <QuizBanner />
      <ProServices  />
      <FeaturedProducts />
      <CouponsAndDeals showDis={isShowDis}   />
    </>
  )
}

export default Home
