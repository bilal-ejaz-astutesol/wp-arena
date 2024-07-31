import React from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import AdvertiseBanner from "../../assets/images/advertise-banner.png"
import SizeDimensions from '../../assets/images/size-dimensions.png'
import "./AdvertiseWithUs.css"
import { Link } from 'react-router-dom'
import packageone from '../../assets/images/packageone.jpg'
import packagetwo from '../../assets/images/packagetwo.jpg'
import ContactForm from '../contactform/ContactForm'

const AdvertiseWithUs = () => {
    return (
        <>
           
            <BreadCrumb />
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h1-font-size wpa-font-weight-700 wpa-pro-services-content wpa-blogs-descriptions'>
                    <h1>Advertise With Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
            </div>
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-content-top-bottom-spacing-30 wpa-advertise-banner'>
                    <img src={AdvertiseBanner} alt='Advertise Banner' />
                </div>
                <div className='wpa-h2-font-size wpa-h3-font-size wpa-font-weight-600'>
                    <h2>Banner Advertisements Spots</h2>
                    <h3>Banner Specification are below.</h3>
                </div>
               
                <div className='wpa-flex wpa-content-top-bottom-spacing-30 wpa-gap-xxl'>
               <div>
               <div className='wpa-h3-font-size'>
                    <h3>Banner Specification are below.</h3>
                    </div>
                   <div> 
                    <img src={packageone} alt='dfjsdlkdljflkdfj'/>
                
                   </div>
               </div>
                    <div>
                    <div className='wpa-h4-font-size'>
                    <h4>Banner Specification are below.</h4>
                    </div>
                <div>
                    <img src={packagetwo} alt='sfdfsdfsfdfsdfsdf'/>
                </div>
                    </div>
                </div>
                <div className='wpa-advertise-headeing wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600'>
                    <h2>Specifications</h2>
                    <p>If your advertisements query is not listed above, don’t worry, <Link to="">contact us</Link> for more pricing options and details. We are always open to new ideas. Fill the form below to get started.</p>
                </div>
            </div>
            <ContactForm/>
      
        </>
    )
}

export default AdvertiseWithUs
