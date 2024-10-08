import React, { useState } from 'react';
import { Link } from "react-router-dom";
import wpamessage from "../../assets/images/wpa-message.png";
import Pagination from '../pagination/Pagination';
import './BlogListing.css';

const BlogListing = ({ dataBlog , ButtonText =true }) => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(dataBlog.length / itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentData = dataBlog.slice(offset, offset + itemsPerPage);

    return (
        <>
            <div>
                <div className="timeline-start"></div>
                <div className="conference-timeline-content">
                    <div className="timeline-article">
                        {currentData.map((elem) => (
                            <div className='relative' key={elem.id}>
                                <div className="content-right-container">
                                    <div className="content-right wpa-flex wpa-gap-40">
                                        <div>
                                            <div className='wpa-blog-list-thumbnail'>
                                                <img src={elem.BlogThumbnail} alt={elem.BlogTitle} />
                                            </div>
                                        </div>
                                        <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                                            <div>
                                                <div className='wpa-blog-list-posted-by wpa-paragraph-text wpa-font-weight-600'>
                                                    <span>Recent updated on By <Link to="">{elem.BlogPostDate} {elem.BlogAdminName}<i className='wpa-share-icon wpa-message-icon'><img src={wpamessage} alt='share blog post icon' /></i></Link>(53)</span>
                                                </div>
                                                <div className='wpa-blog-list-title'>
                                                    <h3><Link to={"/"}>{elem.BlogTitle}</Link></h3>
                                                </div>
                                                <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                    <p>{elem.BlogDescription}</p>
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
                </div>
                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </>
    );
}

export default BlogListing;
