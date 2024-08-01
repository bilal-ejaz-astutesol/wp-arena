import React, { useState } from 'react'
import BrandonKelley from '../../assets/images/brandon-kelley.png'
import './Comments.css'
const Comments = ({data}) => {
    console.log("comments => ",data)

    const [isDataShow, setisDataShow] = useState(false);

    return (
        <>
            <section>
                <div className='wpa-comments-main wpa-h3-font-size'>
                    <h3> {isDataShow ? <span>2</span>: null}  {data}</h3>

                    <div class="wpa-right-menu-buttons wpa-content-end wpa-leave-btn">
                    <button>LEAVE A REPLY</button>
                    </div>
                    <div className='wpa-comments-common'>

                        <div className='wpa-comments-wrapper'>
                        <div className='wpa-flex wpa-gap-70 wpa-content-top-bottom-spacing-30'>
                        <div className='wpa-comments-common-icon'>
                                <img src={BrandonKelley} alt='Brandon kelley' />
                            </div>
                            <div className='wpa-comments-common-content wpa-h5-font-size wpa-paragraph-text'>
                                <div className='wpa-flex wpa-space-between ' >
                                <h5>Brandon kelley</h5>
                                <h6>27 AUG 2024</h6>
                                </div>
                                <p>In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated.  For WordPress site owners, implementing ID verification is a crucial step towards enhancing to using their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <div className='wpa-button-reply'><button type='button'>Reply</button></div>

                            </div>
                        </div>
                            <div className='wpa-comments-reply wpa-flex wpa-gap-70'>
                            <div className='wpa-comments-common-icon'>
                                <img src={BrandonKelley} alt='Brandon kelley' />
                            </div>
                            <div className='wpa-comments-common-content wpa-h5-font-size wpa-paragraph-text'>
                                <div className='wpa-flex wpa-space-between'>
                                <h5>Brandon kelley, <span>Admin</span></h5>
                                <h6>27 AUG 2024</h6>
                                </div>
                                <p>In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated.  For WordPress site owners, implementing ID verification is a crucial step towards enhancing to using their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <div className='wpa-button-reply'><button type='button'>Reply</button></div>
                            </div>

                        </div>
                        </div>
                       
                    </div>
                    <div className='wpa-comments-common'>

                        <div className='wpa-comments-wrapper'>
                        <div className='wpa-flex wpa-gap-70 wpa-content-top-bottom-spacing-30'>
                        <div className='wpa-comments-common-icon'>
                                <img src={BrandonKelley} alt='Brandon kelley' />
                            </div>
                            <div className='wpa-comments-common-content wpa-h5-font-size wpa-paragraph-text'>
                                <h5>Brandon kelley</h5>
                                <p>In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated.  For WordPress site owners, implementing ID verification is a crucial step towards enhancing to using their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <div className='wpa-button-reply'><button type='button'>Reply</button></div>

                            </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div className='wpa-comment-form wpa-h3-font-size'>
                    <h3>Leave a Comment</h3>
                    <form>
                    <div className='wpa-form-inner'>
                        <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
                            <input type='text' placeholder='Name' className='wpa-input-padding-20' />
                            <input type='text' placeholder='Website' className='wpa-input-padding-20' />
                        </div>
                        <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>
                            <textarea type='email' placeholder='Message' className='wpa-input-padding-20' />
                        </div>
                    </div>
                    <div class="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500 wpa-comments-btn"><button type="button" >START CONVERSATION</button></div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Comments
