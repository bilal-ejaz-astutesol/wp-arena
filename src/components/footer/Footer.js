import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "../../assets/images/wpa-footer-logo.png";
import FacebookIcon from "../../assets/images/wpa-facebook.png";
import TwitterIcon from "../../assets/images/wpa-twitter.png";
import LinkedInIcon from "../../assets/images/wpa-linkedin.png";
import InstagramIcon from "../../assets/images/wpa-instagram.png";
import YoutubeIcon from "../../assets/images/wap-youtube.png";
import GitLabIcon from "../../assets/images/wpa-git-lab.png";

import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='wpa-footer-banner'>
            <div className='wpa-footer-content wpa-wrapper-sides-spacing'>
                <div className='wpa-pro-services-content'>
                <div className='wpa-footer-logo'>
                    <img src={ FooterLogo } alt='Footer banner' />
                </div>
                <div className='wpa-footer-description wpa-content-top-bottom-spacing-30'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <div className='wpa-footer-social-links'>
                    <ul className='wpa-flex wpa-gap-10'>
                        <li><Link to={"https://www.facebook.com/WPArena/"} target='blank'><img src={FacebookIcon} alt='facebook'/></Link></li>
                        <li><Link to={"https://x.com/WPArena"} target='blank'><img src={TwitterIcon} alt='twitter'/></Link></li>
                        <li><Link to={""} target='blank'><img src={LinkedInIcon} alt='LinkedIn'/></Link></li>
                        <li><Link to={""} target='blank'><img src={InstagramIcon} alt='Instagram'/></Link></li>
                        <li><Link to={""} target='blank'><img src={YoutubeIcon} alt='Youtube'/></Link></li>
                        <li><Link to={""} target='blank'><img src={GitLabIcon} alt='GitLab'/></Link></li>
                    </ul>
                </div>
                </div>
                <div className='wpa-footer-menu wpa-content-top-bottom-spacing-30'>
                    <ul className='wpa-flex'> 
                        <li><Link to={""}>News</Link></li>
                        <li><Link to={"/directory"}>Directory</Link></li>
                        <li><Link to={""}>Tutorials</Link></li>
                        <li><Link to={"/faqs"}>Faq's</Link></li>
                        <li><Link to={"/category/reviews/plugins"}>Plugins</Link></li>
                        <li><Link to={"/category/reviews/themes"}>Themes</Link></li>
                        <li><Link to={"/advertise"}>Advertise</Link></li>
                        <li><Link to={"/toolkit"}>Toolkit</Link></li>
                        <li><Link to={""}>Privacy Policy</Link></li>
                        <li><Link to={""}>Terms of Service</Link></li>
                        <li><Link to={""}>Advanced Search</Link></li>
                        <li><Link to={""}>Free Blog Setup</Link></li>
                        <li><Link to={""}>Contact</Link></li>
                    </ul>
                </div>
                <div className='wpa-footer-copyright'>
                    <p>Copyright © 2024 · All Rights Reserved · WPArena is a Project of TechAbout LLC.<br/> We are not affiliated with Automattic or WordPress.</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
