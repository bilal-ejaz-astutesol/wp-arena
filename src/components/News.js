import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import BlogDetail from "./blog-detail/BlogDetail";
import BreadCrumb from "./breadcrumb/BreadCrumb";

function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();

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
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts?categories=${id}&_embed`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        console.error(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    < BreadCrumb/>
        <div className="wpa-wrapper-sides-spacing">
      <h1>{type ? type.charAt(0).toUpperCase() + type.slice(1) : "Posts"}</h1>
      <Timeline posts={posts} />
    </div>
    </>
  );
}

export default News;