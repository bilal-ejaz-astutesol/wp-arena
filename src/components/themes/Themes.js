import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_CATEGORY_SLUG } from '../../queries';
import oceanwptheme from "../../assets/images/oceanwp-theme-review.png";
import responsivethemereview from "../../assets/images/responsive-theme-review.png";
import lawblogwordpress from "../../assets/images/law-blog-wordpress.png";
import best_minecraft from "../../assets/images/5-best-minecraft.png";
import how_to_customize_wordpress_header from "../../assets/images/how-to-customize-wordpress-header.png";
import how_to_customize_wordpress_version from "../../assets/images/how_to_customize_wordpress-version.png";
import how_to_check_wordpress_error_404 from "../../assets/images/how-to-check-wordpress-error-404.png";
import major_and_secondery_search from "../../assets/images/major-and-secondery-search.png";
import top_seo_companies_in_the_world from "../../assets/images/top-seo-companies-in-the-world.png";
import most_useful_wordpress_website from "../../assets/images/most-useful-wordpress-website.png";
import BreadCrumb from '../breadcrumb/BreadCrumb';
import SearchBar from '../SearchBar/SearchBar';
import BlogListing from '../bloglisting/BlogListing';
import "./Themes.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import wpamessage from "../../assets/images/wpa-message.png";
import Pagination from '../pagination/Pagination';
import { API_BASE_URL } from '../../apiConfig';

const Themes = ({ ButtonText, isShowBreadCrumb = true, IshwoPluginContent = true, IsShowSearchBar = true }) => {
  const { type } = useParams(); // Get the category slug from URL

  // Only run the query if `type` is defined
  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY_SLUG, {
    variables: { categorySlug: type || "" }, // Provide a fallback empty string if `type` is not yet available
  });

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  if (loading) return <div className="wpa-loader-main"><div className="wpa-loader"></div></div>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  const posts = data?.posts?.nodes || [];
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentData = posts.slice(offset, offset + itemsPerPage);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {isShowBreadCrumb && <BreadCrumb />}

      <section id="conference-timeline" className="wpa-wrapper-sides-spacing wpa-listings wpa-themes-without-dates">
        {IshwoPluginContent && (
          <div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content'>
            <h1>WPArena Themes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
        )}
        {IsShowSearchBar && <SearchBar />}

        <div className="timeline-article">
          {currentData.map((elem) => (
            <div className='relative' key={elem.id}>
              <div className="content-right-container">
                <div className="content-right wpa-flex wpa-gap-40">
                  <div>
                    <div className='wpa-blog-list-thumbnail'>
                      <img src={elem.featuredImage?.node?.sourceUrl} alt={elem.title} />
                    </div>
                  </div>
                  <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                    <div>
                      <div className='wpa-blog-list-posted-by wpa-paragraph-text wpa-font-weight-600'>
                        <span>Recent updated on By <Link to="">{new Date(elem.date).toLocaleDateString()} {elem.author?.node?.name}<i className='wpa-share-icon wpa-message-icon'><img src={wpamessage} alt='share blog post icon' /></i></Link>(53)</span>
                      </div>
                      <div className='wpa-blog-list-title'>
                        <h3><Link to={`/${elem.slug}`} dangerouslySetInnerHTML={{ __html: elem.title }} /></h3>
                      </div>
                      <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                        <p dangerouslySetInnerHTML={{ __html: elem.excerpt }} />
                      </div>
                    </div>
                    <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500">
                      <button type="button">{ButtonText ? "PLUGINS" : "THEMES"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button 
            onClick={() => handlePageClick(currentPage - 1)} 
            disabled={currentPage === 0}
            className="pagination-button"
          >
            Previous
          </button>
          {Array.from({ length: pageCount }, (_, index) => (
            <button 
              key={index} 
              onClick={() => handlePageClick(index)} 
              className={`pagination-button ${index === currentPage ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageClick(currentPage + 1)} 
            disabled={currentPage === pageCount - 1}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}


export default Themes
