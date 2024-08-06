import React, { useState } from 'react';
import './Listing.css';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../queries'; // Make sure to adjust the import path accordingly

const Listing = ({ showdescriptionServices = true, showgetstartednowbutton = true }) => {
    const { loading, error, data } = useQuery(GET_SERVICES);
    const [itemsToShow, setItemsToShow] = useState(6); // State to keep track of number of items to show

    if (loading) {
        return (
          <div className="wpa-loader-main">
            <div className="wpa-loader"></div>
          </div>
        );
    }

    if (error) {
        return <p>Error fetching services: {error.message}</p>;
    }

    const services = data.services.nodes;

    // Function to handle loading more items
    const loadMore = () => {
        setItemsToShow(itemsToShow + 6);
    };

    return (
        <section>
            <div className='wpa-wrapper-sides-spacing --wpa-section-top-bottom-spacing'>

                {showdescriptionServices && (
                    <div className='wpa-pro-services-content wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600 '>
                        <h2>Pro Services</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries.
                        </p>
                    </div>
                )}

                <div className='wpa-pro-services-wrapper wpa-content-top-bottom-spacing-30 wpa-flex wpa-menu-items-gap '>
                    {services.length > 0 ? (
                        services.slice(0, itemsToShow).map((service) => (
                            <div key={service.databaseId} className='wpa-pro-services-box'>
                                <div className='wpa-pro-services-box-content'>
                                    <div className='wpa-pro-services-box-content-icon wpa-text-center'>
                                        {/* Use the featured image URL */}
                                        {service.featuredImage && (
                                            <img 
                                                src={service.featuredImage.node.sourceUrl} 
                                                alt={service.featuredImage.node.altText || service.title} 
                                            />
                                        )}
                                    </div>
                                    <div className='wpa-content-top-bottom-spacing-30 wpa-left-right-padding'>
                                        <div className='wpa-pro-services-box-content-title wpa-text-center line-limit-1'>
                                            <h2>{service.title}</h2>
                                        </div>
                                        <div className='wpa-pro-services-box-content-description wpa-text-center wpa-paragraph-text wpa-line-limit-2'>
                                            <p dangerouslySetInnerHTML={{ __html: service.content }}></p>
                                        </div>
                                        {showgetstartednowbutton && (
                                            <div className="wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30">
                                                <button>GET STARTED NOW</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No services available</p>
                    )}
                </div>

                {itemsToShow < services.length && (
                    // <div className="wpa-load-more-container wpa-text-center">
                    //     <button className="wpa-load-more-btn" onClick={loadMore}>Load More</button>
                    // </div>
                    <div className="wp-view-more-btn btn-primary-hover wpa-margin-bottom-20">
                    <button type="button"  onClick={loadMore}>
                      LOAD MORE
                    </button>
                  </div>
                )}
            </div>
        </section>
    );
};

export default Listing;
