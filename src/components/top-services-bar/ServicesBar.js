import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WordpressBlog_icon from "../../assets/images/wordpress-blog.png";
import ServicesBarIcon from "../../assets/images/services-bar-icon.png";
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

    useEffect(() => {
        const burger = document.querySelector('.js-burger');
        const targetElement = document.querySelector('.services-bar-off-canvas');

        const handleBurgerClick = (event) => {
            event.preventDefault();
            if (targetElement) {
                targetElement.classList.toggle('nav-open');
            }
        };

        burger.addEventListener('click', handleBurgerClick);

        return () => {
            burger.removeEventListener('click', handleBurgerClick);
        };
    }, []);

    return (
        <section>
            <div className='services-bar-off-canvas'>
                <a href="#" className="burger js-burger"><img src={ServicesBarIcon} alt='ServicesBar' /><i></i></a>

                <nav className="menu">
             <div className='wpa-services-bar-mobile'>
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

                </nav>

                <div className="overlay"></div>
            </div>
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
