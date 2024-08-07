import React, { useState } from "react";
import share_post_icon from "../../assets/images/share-icon.png";
import defaultimg from "../../assets/images/defaultimage.jpg";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = ({ posts }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 5);
  };

  if (!posts || posts.length === 0) {
    return <p className="wpa-error">No posts available.</p>;
  }

  const visiblePosts = posts.slice(0, visibleBlogs);

  return (
    <>
      <section id="conference-timeline">
        <div>
          <div className="timeline-start"></div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            {visiblePosts.map((post) => (
              <div className="timeline-article relative" key={post.id}>
                <div className="content-right-container">
                  <div className="content-right wpa-flex wpa-gap-40">
                    <div>
                      <div className="wpa-blog-list-thumbnail">
                        <img
                          src={post.featuredImage?.node?.sourceUrl || 'default-image-url'}
                          alt={post.featuredImage?.node?.altText || post.title}
                          onError={(e) => (e.target.src = 'default-image-url')}
                        />
                      </div>
                    </div>
                    <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
                      <div className="wpa-blog-list-title line-limit-2">
                        <h3>
                          <Link to={`/${post.slug}`}>{post.title}</Link>
                        </h3>
                      </div>
                      <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
                        <span>
                          Recent updated by{' '}
                          <Link to="">
                            {post.author?.node?.name || 'Unknown Author'}
                            <i className="wpa-share-icon">
                              <img src={share_post_icon} alt="share blog post icon" />
                            </i>
                          </Link>
                        </span>
                      </div>
                      <div className="wpa-blog-list-description wpa-paragraph-text line-limit-4">
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meta-date">
                  <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
                    <span className="month">
                      {new Date(post.date).toLocaleString('default', { month: 'long' })}
                    </span>
                    <span className="date">
                      {new Date(post.date).getDate()}/
                      {new Date(post.date).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="timeline-end"></div>
          {visibleBlogs < posts.length && (
            <div className="wp-view-more-btn btn-primary-hover">
              <button type="button" onClick={loadMoreBlogs}>
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Timeline;