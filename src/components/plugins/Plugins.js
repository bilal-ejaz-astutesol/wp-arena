import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import Pagination from '../pagination/Pagination';
import wpamessage from '../../assets/images/wpa-message.png';
import './plugin.css';

const Plugins = ({ ButtonText, isShowBreadCrumb = true, IshwoPluginContent = true, IsShowSearchBar = true }) => {
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const { type } = useParams();

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil((searchResults.length > 0 ? searchResults.length : posts.length) / itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentData = (searchResults.length > 0 ? searchResults : posts).slice(offset, offset + itemsPerPage);

    // Function to fetch default posts
    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const categoryIds = { plugins: 8 };
            const id = categoryIds[type] || categoryIds.plugins;
            const response = await axios.get(`${API_BASE_URL}/posts?categories=${id}`);
            setPosts(response.data);
        } catch (error) {
            setError('Error fetching posts');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Function to fetch search results
    const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {
            const endpoints = [`${API_BASE_URL}/posts`, `${API_BASE_URL}/pages`];
            const requests = endpoints.map(endpoint =>
                axios.get(endpoint, { params: { search: query } })
            );
            const responses = await Promise.all(requests);
            const combinedResults = responses.flatMap(response => response.data);
            setSearchResults(combinedResults);
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) {
          return;
        }
        fetchResults();
      };

    useEffect(() => {
        fetchPosts();
    }, [type]);

    if (loading) return <div className="wpa-loader-main"><div className="wpa-loader"></div></div>;
    if (error) return <p>{error}</p>;

    return (
        <>
            {isShowBreadCrumb && <BreadCrumb />}
            <section id="conference-timeline" className="wpa-wrapper-sides-spacing wpa-listings">
                {IshwoPluginContent && (
                    <div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content'>
                        <h1>WPArena Plugins</h1>
                        <p>Latest WordPress Plugin Reviews.</p>
                    </div>
                )}
                {IsShowSearchBar && (
                    <div className="wpa-search-bar-input-wrapper wpa-flex wpa-content-center wpa-start-now-for-free">
                        <input type="text" placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                )}

                <div className="timeline-article wpa-themes-blogs">
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
                                                <h3><Link to={`/${elem.slug}`} dangerouslySetInnerHTML={{ __html: elem.title.rendered }} /></h3>
                                            </div>
                                            <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                <p dangerouslySetInnerHTML={{ __html: elem.excerpt.rendered }} />
                                            </div>
                                        </div>
                                        <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500">
                                            <button type="button">{ButtonText ? "THEMES" : "PLUGINS"}</button>
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
};

export default Plugins;
