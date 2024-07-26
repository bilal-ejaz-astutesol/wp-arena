import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './wordpress-style.css'
function PostPage() {
    const { slug } = useParams();
    const [token, setToken] = useState(null);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                const response = await axios.post(
                  "https://stg-wparena-staging.kinsta.cloud/wp-json/jwt-auth/v1/token",
                  {
                    username: "munazza",
                    password: ")S03*r!gv1pbAovm1(5zO($&",
                  }
                );
                setToken(response.data.token);
              } catch (error) {
                setError("Error fetching token");
                console.error(error);
              }
            };
    
        getToken();
      }, []);

      useEffect(() => {
        if (token) {
          const fetchContent = async () => {
            try {
              let response = await axios.get(`https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts?slug=${slug}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              
              if (response.data.length > 0) {
                setPost(response.data[0]);
                setLoading(false);
              } else {
                response = await axios.get(`https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/pages?slug=${slug}`, {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });
                
                if (response.data.length > 0) {
                  setPost(response.data[0]);
                  setLoading(false);
                } else {
                  setError(true);
                  setLoading(false);
                }
              }
            } catch (error) {
              console.error('Error fetching content:', error);
              setError(true);
              setLoading(false);
            }
          };
    
          fetchContent();
        }
      }, [token, slug]);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

  return (
    
    <>
    <BreadCrumb />
    <div className='wpa-custom-style'>
    <div className='wpa-custom-blog-detail wpa-content-top-bottom-spacing-30'>
        <div className='wpa-wrapper-sides-spacing'>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    </div>
    </div>
    </>
  )
}

export default PostPage