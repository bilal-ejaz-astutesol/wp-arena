import React from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import ShareIcons from '../shareicons/ShareIcons'
import TacticsAndBestPractices from '../../assets/images/tactics-and-best-practices.png'
import './ThemeDetail.css';
import TableOfContent from '../table-of-content/TableOfContent'
import Comments from '../comments/Comments';
const ThemeDetail = () => {
  return (
    <>
      <BreadCrumb />
      <div className='wpa-wrapper-sides-spacing'>
        <div className='wpa-flex wpa-detail-page-row'>
          <div className='wpa-left-page-content'>
            <div className='wpa-h1-font-size wpa-paragraph-text wpa-blogs-details '>
              <h1>SEO WP Theme</h1>
            </div>
            <ShareIcons />
            <div className='wpa-blog-detail-banner wpa-content-top-bottom-spacing-30'>
              <img src={TacticsAndBestPractices} alt='off page seo for wordpress' />
            </div>
            <div className='wpa-theme-detail-page-p'>
              <p>SEO WP is a free responsive WordPress theme based on famous Material Design. With clean code and simple design, it can be used for any blog and business website.</p>
              <p>SEO WP Theme is one of the best material-based themes in the WordPress Market. The search engine optimization for SEO WP Theme is done with great care and meticulousness. The title of the site, heading tag on the single pages, archive page, and other valuable pages also have reasonable, standard arrangements of SEO. SEO WP Theme seems very simple, but this theme can</p>
              <p>Finally, the SEO WP Theme is regularly updated to keep up with the latest trends. Besides, this WordPress theme includes a Disqus Commenting System with built-in support, making commenting more accessible and interactive. Moreover, Comments indexing by search engines from Disqus makes this theme more SEO-friendly.</p>
            </div>
            <div className='wpa-content-top-bottom-spacing-30'>
              <div className='wpa-table-of-content'>
                <div className='wpa-table-of-content-data wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                  <div className='wpa-font-weight-700'>
                    <h3>Features of SEOWP Theme – Best WordPress SEO-Friendly theme
                    </h3>
                  </div>
                  <ul>
                    <li>Built with Material Design.</li>
                    <li>Support responsive layout.</li>
                    <li>Customize colors and background images.</li>
                    <li>Customize the Header image.</li>
                    <li>Customize logo and site icon.</li>
                    <li>Static front page.</li>
                    <li>Support the breadcrumb menu.</li>
                    <li>Support Disqus Comment System.</li>
                    <li>High performance.</li>
                    <li>Very friendly SEO.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='wpa-theme-detail-page-p'>
              <p>We named this theme SEO WP because of its primary focus. SEO WP is designed following the best practices of Search Engine Optimization and Google.</p>
            </div>
            <Comments />
          </div>
          <div className='wpa-right-page-content'>
            <div className='wpa-flex wp-view-more-btn btn-primary-hover  wpa-gap-20'>
              <button type='button'>PREVIEW</button>
              <button type='button'>DOWNLOAD</button>
            </div>
            <div className='wpa-content-top-bottom-spacing'>
              <div className='wpa-background-heading wpa-h4-font-size wpa-font-weight-600'>
                <h4>THEME INFORMATION</h4>
              </div>
              <div className='wpa-padding-20'>
                <div className='wpa-flex'>
                  <div className='wpa-themes-details-label'>
                    <h5>Theme Slug:</h5>
                  </div>
                  <div className='wpa-themes-deatils-'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ThemeDetail
