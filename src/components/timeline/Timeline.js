import React, { useState, useEffect } from 'react';
import share_post_icon from "../../assets/images/share-icon.png";
import enhancing_security_and_trust from "../../assets/images/enhancing-security-and-trust.png";
import enhancing_website_security from "../../assets/images/ehhancing-website-security.png";
import best_minecraft from "../../assets/images/5-best-minecraft.png";
import how_to_customize_wordpress_header from "../../assets/images/how-to-customize-wordpress-header.png";
import how_to_customize_wordpress_version from "../../assets/images/how_to_customize_wordpress-version.png";
import how_to_check_wordpress_error_404 from "../../assets/images/how-to-check-wordpress-error-404.png";
import major_and_secondery_search from "../../assets/images/major-and-secondery-search.png";
import top_seo_companies_in_the_world from "../../assets/images/top-seo-companies-in-the-world.png";
import most_useful_wordpress_website from "../../assets/images/most-useful-wordpress-website.png";
import { Link } from "react-router-dom";
import axios from "axios";
// import ServicesBar from "./top-services-bar/ServicesBar";
// import Patners from "./patners/Patners";
import "./Timeline.css";
 
const Timeline = () => {

    const [visibleBlogs, setVisibleBlogs] = useState(9);
     const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Function to fetch posts
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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    const loadMoreBlogs = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 5);
    };

    return (
        <>
            <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
                <div className=''>
                    <div>
                    <div className="timeline-start"></div>
                    <div className="conference-center-line"></div>
                    <div className="conference-timeline-content">
                        <div className="timeline-article">
                            {posts.slice(0, visibleBlogs).map((elem) => (
                                <div className='relative' key={elem.id}>
                                    <div className="content-right-container">
                                        <div className="content-right wpa-flex wpa-gap-40">
                                            <div>
                                                <div className='wpa-blog-list-thumbnail'>
                                                    <img src={elem.featured_image} alt={elem.BlogTitle} />
                                                </div>
                                            </div>
                                            <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                                                <div className='wpa-blog-list-title'>
                                                    <h3><Link to={`/${elem.slug}`}>{elem.title.rendered}</Link></h3>
                                                </div>
                                                <div className='wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600'>
                                                    <span>Recent updated By <Link to="">{elem.author}<i className='wpa-share-icon'><img src={share_post_icon} alt='share blog post icon' /></i></Link></span>
                                                </div>
                                                <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                <p dangerouslySetInnerHTML={{ __html: elem.excerpt.rendered }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta-date">
                                        <div className='wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700'>
                                            <span className="month">JULY</span>
                                            <span className="date">5/2024</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="timeline-end"></div>
                    </div>

                    {visibleBlogs < posts.length && (
                        <div className='wp-view-more-btn btn-primary-hover'>
                            <button type='button' onClick={loadMoreBlogs}>LOAD MORE</button>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}

export default Timeline;
