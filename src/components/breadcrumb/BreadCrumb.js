import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./BreadCrumb.css";

const BreadCrumb = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== "").map(crumb => {
      currentLink += `/${crumb}`;
      return (
        <div className='crumb' key={currentLink}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <nav className='breadcrumb wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30 wpa-regular-font-weight wpa-paragraph-text wpa-btn-dark-color'>
      <div className='crumb'>
        <Link to="/">Home</Link>
      </div>
      {crumbs}
    </nav>
  );
}

export default BreadCrumb;
