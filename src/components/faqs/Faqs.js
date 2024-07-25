import React from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import CouponsAndDealsFaqs from '../coupons-and-deals-faqs/CouponsAndDealsFaqs'
import "./Faqs.css";

const Faqs = () => {
  return (
    <>
    <BreadCrumb/>
    <div className='wpa-faqs-margin-top'>
    <CouponsAndDealsFaqs showDescriptionCondition= "true"/>
    </div>    
    </>
  )
}

export default Faqs
