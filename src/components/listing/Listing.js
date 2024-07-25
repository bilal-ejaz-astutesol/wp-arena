import React from 'react'
import { Link } from 'react-router-dom';
import './Listing.css'
const Listing = ({ data , showButton=false , showDescription=true , ShowGetStartedNowButton="false" }) => {
  return (
    <>
    <section>
        <div className='wpa-wrapper-sides-spacing --wpa-section-top-bottom-spacing'>
            {showDescription === "true" ? <div className='wpa-pro-services-content wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600'>
                <h2>Pro Services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div> : null}
            <Link to={"/"} className='wpa-pro-services-wrapper wpa-content-top-bottom-spacing-30 wpa-flex wpa-menu-items-gap'>
                {data.map((elem) => (
                    <div className='wpa-pro-services-box'>
                        <div className='wpa-pro-services-box-content'>
                            <div className='wpa-pro-services-box-content-icon wpa-text-center'>
                                <img src={elem.ProServiceIcon} alt='Website Development' />
                            </div>
                           <div className='wpa-content-top-bottom-spacing-30 wpa-left-right-padding'>
                           <div className='wpa-pro-services-box-content-title wpa-text-center'>
                                <h2>{elem.ProServiceTitle}</h2>
                            </div>
                            <div className='wpa-pro-services-box-content-description wpa-text-center wpa-paragraph-text'>
                                <p>{elem.ProServiceDescription}</p>
                            </div>
                            {showButton === "true" ? <div className='wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30'><button>LEARN MORE</button></div> : null}
                            {ShowGetStartedNowButton === "true" ? <div className='wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30'><button>GET STARTED NOW</button></div> : null}
                           </div>
                        </div>
                    </div>
                ))}
               
            </Link>
            <div class="wp-view-more-btn btn-primary-hover wpa-button-center"><button type="button" fdprocessedid="9u5do8">LOAD MORE</button></div>
        </div>
    </section>
</>
  )
}

export default Listing
