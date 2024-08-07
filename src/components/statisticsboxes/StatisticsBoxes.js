import React from 'react';
import happyCustomerIcon from "../../assets/images/happy-customer.png"
import YearsOfExperiance from "../../assets/images/wpa-years-experiance.png"
import WpaarenaBlogs from "../../assets/images/wpa-arena-blogs.png"
import Wpaourthemes from "../../assets/images/wpa-our-themes.png"
import WpaProjectCompleted from "../../assets/images/wpa-project-completed.png"
import "./StatisticsBoxes.css"
const StatisticsBoxes = () => {
    const StatisticsData = [
        {
            ExperienceIcon: YearsOfExperiance,
            years: "20+",
            title: "Years of Exprience"
        },

        {
            ExperienceIcon: happyCustomerIcon,
            years: "7K+",
            title: "Happy Customers"
        },

        {
            ExperienceIcon: WpaarenaBlogs,
            years: "10K+",
            title: "WPArena-Blogs"
        },

        {
            ExperienceIcon: WpaProjectCompleted,
            years: "7K+",
            title: "Projects Completed"
        },

        {
            ExperienceIcon: Wpaourthemes,
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
