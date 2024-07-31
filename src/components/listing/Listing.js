import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Listing.css';
import { API_BASE_URL } from '../../apiConfig';

const Listing = ({showdescriptionServices =true , showgetstartednowbutton=true}) => {
    const [services, setServices] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/service?_embed`);
                setServices(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching posts");
                console.error(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
          <div className="wpa-loader-main">
            <div className="wpa-loader"></div>
          </div>
        );
    }

    return (
        <section>
            <div className='wpa-wrapper-sides-spacing --wpa-section-top-bottom-spacing'>
            {showdescriptionServices && (
    <div className='wpa-pro-services-content wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600'>
        <h2>Pro Services</h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries.
        </p>
    </div>
)}

                <div className='wpa-pro-services-wrapper wpa-content-top-bottom-spacing-30 wpa-flex wpa-menu-items-gap'>
                    {services.length > 0 ? (
                        services.map((elem) => (
                            <div key={elem.id} className='wpa-pro-services-box'>
                                <div className='wpa-pro-services-box-content'>
                                    <div className='wpa-pro-services-box-content-icon wpa-text-center'>
                                        {/* Use the embedded featured media URL */}
                                        <img src={elem._embedded['wp:featuredmedia'][0].source_url} alt={elem.title.rendered} />
                                    </div>
                                    <div className='wpa-content-top-bottom-spacing-30 wpa-left-right-padding '>
                                        <div className='wpa-pro-services-box-content-title wpa-text-center'>
                                            <h2>{elem.title.rendered}</h2>
                                        </div>
                                        <div className='wpa-pro-services-box-content-description wpa-text-center wpa-paragraph-text wpa-line-limit-2'>
                                            <p dangerouslySetInnerHTML={{ __html: elem.content.rendered }}></p>
                                        </div>
                                        {showgetstartednowbutton ? (<div class="wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30"><button>GET STARTED NOW</button></div>) : null}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No services available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Listing;
