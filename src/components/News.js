import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import axios from "axios";
import { GET_POSTS_BY_CATEGORY } from '.././queries'; 
import { Link, useParams } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import BlogDetail from "./blog-detail/BlogDetail";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import { API_BASE_URL } from '../apiConfig';
import "../App.css";


function News() {
  const { type } = useParams();
  
  const categoryIds = {
    news: 990,
    tutorial: 5,
    reviews: 9,
    comparison: 989,
    resources: 889,
    collection: 988,
  };
  const categoryId = categoryIds[type] || categoryIds.news;

  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { categoryId },
  });

  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  const posts = data?.posts?.nodes || [];

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
