import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import BlogDetail from "./blog-detail/BlogDetail";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import { API_BASE_URL } from '../apiConfig';
import "../App.css";

function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();

  // Object mapping types to category IDs
  const categoryIds = {
    news: 990,
    tutorial: 5,
    reviews: 9,
    comparison: 989,
    resources: 889,
    collection: 988,
  };
  const id = categoryIds[type] || categoryIds.news;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/posts?categories=${id}`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        // console.error(error);
        setLoading(false);
      }
    };
    fetchPosts();
    return () => clearTimeout(timer);
  }, [id, setLoading]);
  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  } 
  return (
    <>
      <BreadCrumb />
      <div className="wpa-wrapper-sides-spacing">
        <h1>{type ? type.charAt(0).toUpperCase() + type.slice(1) : "Posts"}</h1>
        <Timeline posts={posts} />
      </div>
    </>
  );
}

export default News;
