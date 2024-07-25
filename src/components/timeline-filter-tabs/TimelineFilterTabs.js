import React from 'react';
import "./TimelineFilterTabs.css";
import { Link } from 'react-router-dom';
const TimelineFilterTabs = () => {
  return (
    <>
      <section>
        <div className='wpa-wrapper-sides-spacing'>
        <div className='wpa-flex wpa-right-menu-buttons timeline-filter-tabs wpa-content-top-bottom-spacing-30 wpa-gap-20 btn-dark-hover'>
          <button type='button'>REVIEWS</button>
          <button type='button'>NEWS</button>
          <button type='button'>LATEST</button>
          <button type='button'>Editorial</button>
          {/* <Link to={"/categories"}>CATEGORIES</Link> */}
        </div>
        <div className='wpa-line'></div>
        </div>
        
      </section>
    </>
  )
}

export default TimelineFilterTabs
