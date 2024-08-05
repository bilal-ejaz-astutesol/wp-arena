import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_CATEGORY_SLUG_THEMES } from '../../queries';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import Pagination from '../pagination/Pagination'; // Ensure Pagination is correctly imported
import wpamessage from '../../assets/images/wpa-message.png'; // Ensure the correct path to wpamessage image
import './Themes.css';

const Themes = ({ ButtonText, isShowBreadCrumb = true, IshwoPluginContent = true, IsShowSearchBar = true }) => {
  const { type } = useParams(); 
  const [query, setQuery] = useState(''); 
  const [pageCount, setPageCount] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);
  // const [results, setResults] = useState('');

  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY_SLUG_THEMES, {
    variables: { categorySlug: type || '', page: currentPage },
    skip: !type, 
  });

  useEffect(() => {
    if (data) {
      setPageCount(data.posts.pageCount); 
    }
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  if (!type) {
    return <p>No category slug provided</p>;
  }

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
      {isShowBreadCrumb && <BreadCrumb />}
      <section id="conference-timeline" className="wpa-wrapper-sides-spacing wpa-listings">
        {IshwoPluginContent && (
          <div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content'>
            <h1>WPArena Themes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
        )}
        {IsShowSearchBar && (
          <div className="wpa-search-bar-input-wrapper wpa-flex wpa-content-center wpa-start-now-for-free">
            <form onSubmit={handleSearch}>
              <input type="text" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
              <button type='submit'>Search</button>
            </form>
          </div>
        )}

        <div className="timeline-article wpa-themes-blogs">
          {posts.map((post) => (
            <div className='relative' key={post.id}>
              <div className="content-right-container">
                <div className="content-right wpa-flex wpa-gap-40">
                  <div>
                    <div className='wpa-blog-list-thumbnail'>
                      <img src={post.featuredImage?.node?.sourceUrl} alt={post.featuredImage?.node?.altText || post.title} />
                    </div>
                  </div>
                  <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                    <div>
                      <div className='wpa-blog-list-posted-by wpa-paragraph-text wpa-font-weight-600'>
                        <span>Recent updated on {new Date(post.date).toLocaleDateString()} by {post.author?.node?.name}<i className='wpa-share-icon wpa-message-icon'><img src={wpamessage} alt='share blog post icon' /></i></span>
                      </div>
                      <div className='wpa-blog-list-title'>
                        <h3><Link to={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} /></h3>
                      </div>
                      <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
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

        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </section>
    </>
  );
}

export default Themes;
