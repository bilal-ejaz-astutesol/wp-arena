import React from 'react';
import HeroBaneer from '../hero-banner/HeroBanner';
import Timeline from '../timeline/Timeline';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import axios from "axios";
import Listing from '../listing/Listing';
import { useState, useEffect } from 'react';
import '../../App.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Function to fetch posts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    const fetchPosts = async () => {
      
      try {
        const response = await axios.get(
          "https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        console.error(error);
        setLoading(false);
      }
    };

    // Fetch posts on component mount
    fetchPosts();
  }, [setLoading]);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        {/* You can customize the loader here */}
        <div className="wpa-loader"></div>
      </div>
    );
  }
  const isShowDis=true;
  return (
    <>
      <HeroBaneer />
      <TimelineFilterTabs />
      <div className='wpa-wrapper-sides-spacing'>
      <Timeline posts={posts}  />
      </div>
      <QuizBanner />
      {/* <ProServices  /> */}
      <Listing showgetstartednowbutton={false}/>
      <FeaturedProducts />
      <CouponsAndDeals showDis={isShowDis}   />
    </>
  )
}

export default Home
