import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './wordpress-style.css'
import "../App.css";
import { API_BASE_URL } from '../apiConfig';

function PostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
        const fetchContent = async () => {
            try {
                let response = await axios.get(`${API_BASE_URL}/posts?slug=${slug}`);
                
                if (response.data.length > 0) {
                    setPost(response.data[0]);
                    setLoading(false);
                } else {
                    response = await axios.get(`${API_BASE_URL}/pages?slug=${slug}`);
                    
                    if (response.data.length > 0) {
                        setPost(response.data[0]);
                        setLoading(false);
                    } else {
                        setError("Content not found");
                        setLoading(false);
                    }
                }
            } catch (error) {
                console.error('Error fetching content:', error);
                setError("Error fetching content");
                setLoading(false);
            }
        };

        fetchContent();
    }, [slug, setLoading]);

    if (loading) {
      return (
        <div className="wpa-loader-main">
          {/* You can customize the loader here */}
          <div className="wpa-loader"></div>
        </div>
      );
    }

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