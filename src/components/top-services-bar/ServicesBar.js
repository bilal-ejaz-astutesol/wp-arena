import React from 'react';
import { Link } from 'react-router-dom';
import WordpressBlog_icon from "../../assets/images/wordpress-blog.png";
import './SearchBar.css';

const ServicesBar = () => {
    const MyServicesData = [
        {
            id: 1,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "WordPress Blog"
        },
        {
            id: 2,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "WordPress Hosting"
        },
        {
            id: 3,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Pro Services"
        },
        {
            id: 4,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Wp Tutorials"
        },
        {
            id: 5,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Our Themes"
        },
        {
            id: 6,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Speed Optimization"
        },
    ];

    return (
        <section>
            <div className='wpa-top-servicesbar'>
                <div className='wpa-wrapper-sides-spacing'>
                    <div className='wpa-servicesbar-wrapper wpa-flex wpa-services-gap'>
                        {MyServicesData.map((elem) => (
                            <Link to={"/services"} key={elem.id} className='wpa-services-common wpa-flex wpa-top-services-border wpa-services-inner-paddding wpa-flex-1 services-btn-color'>
                                <div className='wpa-services-icon'>
                                    <img src={elem.ServicesIcon} alt={elem.ServicesTitle} />
                                </div>
                                <div className='wpa-services-title'>
                                    <h3>{elem.ServicesTitle}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesBar;
