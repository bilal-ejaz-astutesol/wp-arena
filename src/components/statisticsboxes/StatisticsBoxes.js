import React from 'react';
import happyCustomerIcon from "../../assets/images/happy-customer.png"
import "./StatisticsBoxes.css"
const StatisticsBoxes = () => {
    const StatisticsData = [
        {
            ExperienceIcon: happyCustomerIcon,
            years: "20+",
            title: "Years of Exper"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "7K+",
            title: "Happy Customers"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "10K+",
            title: "WPArena-Blogs"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "7K+",
            title: "Projects Completed"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "2K+",
            title: "Our Themes"
        },

    ]
    return (
        <>
            <section>
                <div className='wpa-statistics-mian wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30 wpa-flex wpa-menu-items-gap'>

                    {StatisticsData.map((elem) => (
                        <div className='wpa-statistics-common'>
                            <div className='wpa-statistics-inner wpa-gap-10'>
                                <div className='wpa-statistics-icon'>
                                    <img src={elem.ExperienceIcon} alt={elem.title} />
                                </div>
                                <div className='wpa-statistics-content wpa-h2-font-size wpa-h4-font-size'>
                                    <h2>{elem.years}</h2>
                                    <h4>{elem.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default StatisticsBoxes
