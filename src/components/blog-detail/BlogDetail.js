import React from 'react';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import ShareIcon from "../../assets/images/share-icon.png"
import './BlogDetail.css';
const BlogDetail = () => {
  return (
    <>
      <BreadCrumb/>
      <section className='wpa-wrapper-sides-spacing'>
      <div className='wpa-h1-font-size wpa-paragraph-text wpa-blogs-details'>
        <h1>8 Most Unusual wordpress Websites</h1>
       <div className='wpa-flex wpa-blog-content'>
       <p>Last updated on <span>July 8, 2024</span> by Erica Sunarjo | Reviewed by: Syed Balkhi</p>
       <i class="wpa-share-icon"><img src={ShareIcon} alt="share blog post icon" /></i>
       </div>
      </div>
      </section>
    </>
  )
}

export default BlogDetail
