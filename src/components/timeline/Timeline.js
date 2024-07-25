import React, { useState } from 'react';
import share_post_icon from "../../assets/images/share-icon.png";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = ({ posts }) => {
    const [visibleBlogs, setVisibleBlogs] = useState(9);

    const loadMoreBlogs = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 5);
    };

    // Check if posts exist and is an array
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
        return <p>No posts available.</p>;
    }

    const visiblePosts = posts.slice(0, visibleBlogs);

    return (
        <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
            <div className=''>
                <div>
                    <div className="timeline-start"></div>
                    <div className="conference-center-line"></div>
                    <div className="conference-timeline-content">
                        <div className="timeline-article">
                            {visiblePosts.map((elem) => (
                                <div className='relative' key={elem.id}>
                                    <div className="content-right-container">
                                        <div className="content-right wpa-flex wpa-gap-40">
                                            <div>
                                                <div className='wpa-blog-list-thumbnail'>
                                                    <img src={elem._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''} alt={elem.title.rendered} />
                                                </div>
                                            </div>
                                            <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                                                <div className='wpa-blog-list-title'>
                                                    <h3><Link to={`/${elem.slug}`}>{elem.title.rendered}</Link></h3>
                                                </div>
                                                <div className='wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600'>
                                                    <span>Recent updated By <Link to="">{elem._embedded?.['author']?.[0]?.name || 'Unknown Author'}<i className='wpa-share-icon'><img src={share_post_icon} alt='share blog post icon' /></i></Link></span>
                                                </div>
                                                <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                    <p dangerouslySetInnerHTML={{ __html: elem.excerpt.rendered }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta-date">
                                        <div className='wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700'>
                                            <span className="month">{new Date(elem.date).toLocaleString('default', { month: 'long' })}</span>
                                            <span className="date">{new Date(elem.date).getDate()}/{new Date(elem.date).getFullYear()}</span>
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
    );
}

export default Timeline;