import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import HeroBanner from '../hero-banner/HeroBanner';
import Timeline from '../timeline/Timeline';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import Listing from '../listing/Listing';
import '../../App.css';
import { API_BASE_URL } from '../../apiConfig';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState('LATEST'); // Default tab

  const categoryIds = {
    REVIEWS: 9,
    NEWS: 990,
    LATEST: 0,
    Editorial: 7, 
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const categoryId = categoryIds[selectedTab] || categoryIds.LATEST;
        if(categoryId == 0 || categoryIds.LATEST) {
          const response = await axios.get(
            `${API_BASE_URL}/posts`
          );
          setPosts(response.data);
        } else {
          const response = await axios.get(
            `${API_BASE_URL}/posts?categories=${categoryId}`
          );
          setPosts(response.data);
        }

        
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        console.error(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [selectedTab]);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  }

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setLoading(true);
  };

  return (
    <>
      <HeroBanner />
      <TimelineFilterTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <div className='wpa-wrapper-sides-spacing'>
        <Timeline posts={posts} />
      </div>
      <QuizBanner />
      <Listing showgetstartednowbutton={false} />
      <FeaturedProducts />
      <CouponsAndDeals showDis={true} />
    </>
  );
}

export default Home;
