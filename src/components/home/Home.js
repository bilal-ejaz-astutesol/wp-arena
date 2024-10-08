import React from 'react';
import HeroBaneer from '../hero-banner/HeroBanner';
import Timeline from '../timeline/Timeline';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import axios from "axios";
import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Function to fetch posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
        console.log('farooq', posts)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const isShowDis=true;
  return (
    <>
      <HeroBaneer />
      <TimelineFilterTabs />
      <Timeline posts={posts}  />
      <QuizBanner />
      <ProServices  />
      <FeaturedProducts />
      <CouponsAndDeals showDis={isShowDis}   />
    </>
  )
}

export default Home;
