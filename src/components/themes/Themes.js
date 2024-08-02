import React, { useState, useEffect } from 'react'
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

const Themes = ({ButtonText , isShowBreadCrumb="true" , IshwoPluginContent=true ,IsShowSearchBar=true}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = posts.slice(offset, offset + itemsPerPage);



  // Object mapping types to category IDs
  const categoryIds = {
    themes: 10,
  };
  // Get the category ID based on the type, or use a default value (e.g., news)
  const id = categoryIds[type] || categoryIds.themes;

  useEffect(() => {
    // Function to fetch posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/posts?categories=${id}`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        console.error(error);
        setLoading(false);
      }
    };

    // Fetch posts on component mount or when id changes
    fetchPosts();
  }, [id]);

  if (loading) return<div className="wpa-loader-main"><div className="wpa-loader"></div>;</div> 
  if (error) return <p>{error}</p>;

  return (
    <>
     {isShowBreadCrumb ? (<BreadCrumb />) :null} 

      <section id="conference-timeline" className="wpa-wrapper-sides-spacing wpa-listings wpa-themes-without-dates">
        {IshwoPluginContent ? (<div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content'>
          <h1>WPArena Themes</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookgalley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>) :null}
        {IsShowSearchBar? ( <SearchBar />) : null}
       
        <div className="timeline-article">
                        {currentData.map((elem) => (
                            <div className='relative' key={elem.id}>
                                <div className="content-right-container">
                                    <div className="content-right wpa-flex wpa-gap-40">
                                        <div>
                                            <div className='wpa-blog-list-thumbnail'>
                                            <img src={elem.featured_image} alt={elem.BlogTitle} />
                                            </div>
                                        </div>
                                        <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                                            <div>
                                                <div className='wpa-blog-list-posted-by wpa-paragraph-text wpa-font-weight-600'>
                                                    <span>Recent updated on By <Link to="">{elem.BlogPostDate} {elem.author}<i className='wpa-share-icon wpa-message-icon'><img src={wpamessage} alt='share blog post icon' /></i></Link>(53)</span>
                                                </div>
                                                <div className='wpa-blog-list-title'>
                                                    <h3>  <Link to="/" dangerouslySetInnerHTML={{ __html: elem.title.rendered }} /></h3>
                                                  
                                                </div>
                                                <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                    <p dangerouslySetInnerHTML={{ __html: elem.excerpt.rendered }} />
                                                </div>
                                            </div>
                                            <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500">
                                                <button type="button">{ButtonText? "PLUGINS" : "THEMES"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

      </section>

    </>
  )
}

export default Themes
