import React, { useState, useEffect, } from 'react';
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

const Home = () => 
  {const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState('LATEST'); // Default tab

  useEffect(() => {
    // Function to fetch posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts/"
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
  }, []);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        {/* You can customize the loader here */}
        <div className="wpa-loader"></div>
      </div>
    );
  }

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Filter posts based on selected tab
  const filteredPosts = posts.filter(post => {
    // Example logic: Adjust based on your actual data structure and requirements
    return post.categories.includes(selectedTab) || selectedTab === 'LATEST'; 
  });

  return (
    <>
      <HeroBanner />
      <TimelineFilterTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <div className='wpa-wrapper-sides-spacing'>
        <Timeline posts={filteredPosts} />
      </div>
      <QuizBanner />
      {/* <ProServices /> */}
      <Listing showgetstartednowbutton={false} />
      <FeaturedProducts />
      <CouponsAndDeals showDis={true} />
    </>
  );
}

export default Home;
