import React, { useState, useEffect } from 'react';
import "./CouponsAndDealsFaqs.css";
import AccordionItem from '../accordion-item/AccordionItem';
import cloudFaqlogo from "../../assets/images/cloud-faq.png";
import pluginsLogo from "../../assets/images/web-plugin-logo.png";
import featuredDealsLogo from "../../assets/images/featured-deals-logo.png";
import sassLogo from "../../assets/images/saas-logo.png";

import SearchBar from '../SearchBar/SearchBar';

const CouponsAndDealsFaqs = ({ filterTitle, showSearchBar = "true", showLogos = true, disableClick = false, showDescriptionCondition=" true "}) => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (disableClick) {
            setOpenIndex(0); // Open the first item by default if disableClick is true
        }
    }, [disableClick]);

    const handleClick = index => {
        if (!disableClick) {
            setOpenIndex(openIndex === index ? null : index);
        }
    };

    const data = [
        {
            logo: cloudFaqlogo,
            title: "Hosting",
        },
        {
            logo: featuredDealsLogo,
            title: "featured deals",
        },
        {
            logo: pluginsLogo,
            title: "plugins",
        },
        {
            logo: sassLogo,
            title: "software as a service",
        },
        {
            logo: sassLogo,
            title: "themes",
        }
    ];
   
    const filteredData = filterTitle ? data.filter(item => item.title === filterTitle) : data;
    return (
        <>
            <div className="wpa-wrapper-sides-spacing">
                {showDescriptionCondition === "true" ?
                    <div className="wpa-h2-font-size wpa-font-weight-600 wpa-pro-services-content wpa-blogs-descriptions">
                        <h2>Deals and Coupons</h2>
                    </div>
                    :
                    <div className="wpa-h2-font-size wpa-font-weight-600 wpa-pro-services-content wpa-blogs-descriptions">
                        <h2>WPArena Directory</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                }
                {showSearchBar === "true" ? <SearchBar /> : null}
            </div>

            <section className='wpa-faqs'>
                <div className="wpa-wrapper-sides-spacing">
                    <div className="wpa-accordion">
                        {filteredData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                isOpen={disableClick || openIndex === index} // Open by default if disableClick is true
                                onClick={() => handleClick(index)}
                                data={{ ...item, logo: showLogos ? item.logo : null }} // Conditionally render the logo
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CouponsAndDealsFaqs;
