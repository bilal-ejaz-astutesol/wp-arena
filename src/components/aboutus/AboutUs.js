import React from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import AboutUsImage from "../../assets/images/wpaaboutusteam.png";
import AboutUsExperTeamIcon from "../../assets/images/wpa-expert-team.png";
import AboutUsOurValuesIcon from "../../assets/images/wpa-aboutus-our-values.png";
import AboutUsOurVision from "../../assets/images/wpa-aboutus-vision.png";
import AboutUsOurmissionListIcon1 from "../../assets/images/our-mission-list-icon.png";
import './AboutUs.css';
import YoutubeVideo from '../youtubevideo/YoutubeVideo';
import OurTeam from '../ourteam/OurTeam';
import Testimonial from '../testimonial/Testimonial';
import WpaSupportIcon from '../../assets/images/wpa-support.png';
import WpaOurMissionIcon2 from '../../assets/images/our-mission-list-icon-2.png';
import WpaOurMissionIcon3 from '../../assets/images/WpaOurMissionIcon3.png';
const AboutUs = () => {
  return (
    <>
      <BreadCrumb/>
      <section>
                <div class="wpa-quiz-banner wpa-no-bg wpa-wrapper-sides-spacing">
                    <div class="wpa-flex wpa-gap-xxl">

                        <div class="wpa-quiz-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover  wpa-font-weight-600">
                            <h2>About WPArena</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                            <div className='wpa-aboutus-experties-main'>
                                <div className='wpa-aboutus-expertiescommon wpa-flex wpa-gap-20'>
                                    <div className='wpa-aboutus-experties-icon'>
                                        <img src={AboutUsExperTeamIcon} alt='Expert Team' />
                                    </div>
                                    <div className='wpa-aboutus-experties-content wpa-h3-font-size wpa-text-color-primary'>
                                        <h3>Expert Team</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                    </div>
                                </div>
                                <div className='wpa-aboutus-expertiescommon wpa-flex wpa-gap-20'>
                                    <div className='wpa-aboutus-experties-icon'>
                                        <img src={WpaSupportIcon} alt='24/7 support' />
                                    </div>
                                    <div className='wpa-aboutus-experties-content wpa-h3-font-size wpa-text-color-primary'>
                                        <h3>24/7 Support</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took.</p>
                                    </div>
                                </div>
                            </div>
                           
                           {/* <div className='wpa-margin-top-30'>  <button type="button" fdprocessedid="k9va2o">REACH OUT TO ME!</button> </div> */}
                        </div>
                        <div className='wpa-about-us-image'>
                            <img src={AboutUsImage} alt='About us' />
                        </div>
                    </div>
                </div>
              <div className='wpa-aboutus-banner-bg'>
              <YoutubeVideo/>
              </div>  
             
              <div class="wpa-quiz-banner wpa-no-bg wpa-wrapper-sides-spacing">
                    <div class="wpa-flex wpa-gap-xxl">
                    <div className='wpa-about-us-image wpa-about-us-values'>
                            <img src={AboutUsOurValuesIcon} alt='About us' />
                        </div>

                        <div class="wpa-quiz-content wpa-aboutus-our-values-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover  wpa-font-weight-600">
                            <h2>Our Values</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                           
                        </div>
                        
                    </div>
                </div>
                <div class="wpa-quiz-banner wpa-no-bg wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30">
                    <div class="wpa-flex wpa-gap-xxl">
                    

                        <div class="wpa-quiz-content wpa-aboutus-our-values-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover  wpa-font-weight-600">
                            <h2>Our Vision</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                            <ul>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                           
                        </div>
                        <div className='wpa-about-us-image wpa-about-us-values'>
                            <img src={AboutUsOurVision} alt='About us' />
                        </div>
                        
                    </div>
                </div>
                <div class="wpa-quiz-banner wpa-no-bg wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30">
                    <div class="wpa-flex wpa-gap-xxl">
                    <div className='wpa-about-us-image wpa-about-us-values'>
                            <img src={AboutUsOurVision} alt='About us' />
                        </div>

                        <div class="wpa-quiz-content wpa-aboutus-our-values-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover  wpa-font-weight-600">
                            <h2>Our Mission</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                            <div className='wpa-aboutus-experties-main'>
                                <div className='wpa-aboutus-expertiescommon wpa-flex wpa-gap-20'>
                                    <div className='wpa-aboutus-mision-list-icon'>
                                        <img src={ AboutUsOurmissionListIcon1} alt='Expert Team' />
                                    </div>
                                    <div className='wpa-aboutus-experties-content '>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                    </div>
                                </div>
                                <div className='wpa-aboutus-expertiescommon wpa-flex wpa-gap-20'>
                                    <div className='wpa-aboutus-mision-list-icon'>
                                        <img src={WpaOurMissionIcon2} alt='Expert Team' />
                                    </div>
                                    <div className='wpa-aboutus-experties-content '>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                    </div>
                                </div>
                                <div className='wpa-aboutus-expertiescommon wpa-flex wpa-gap-20'>
                                    <div className='wpa-aboutus-mision-list-icon'>
                                        <img src={WpaOurMissionIcon3} alt='24/7 support' />
                                    </div>
                                    <div className='wpa-aboutus-experties-content '>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took.</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</li>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have humour.</li>
                            </ul>
                           
                        </div>
                       
                        
                    </div>
                    
                </div>
                <OurTeam/>
                <Testimonial/>
            </section>
    </>
  )
}

export default AboutUs
