import React, {useState, useEffect} from 'react';
import BlueHost from "../../assets/images/wpa-bluehost.png";
import './CouponsAndDeals.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';
import axios from 'axios';
const CouponsAndDeals = ({showDis , butonLabel = "true"}) => {
    const [deals, setDeals] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // const response = await axios.get("https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/deal");
                const response = await axios.get(`${API_BASE_URL}/deal`);
                // const response = await fetch(`${baseUrl}/some-endpoint`);
                setDeals(response.data);
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
    // const CouponsAndDealsData =[
    //     {
    //         id: 1,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Bluehost",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 2,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "SiteGround",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 3,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Domain.com",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 4,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "WPForms",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 5,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Nextive",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 6,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "DreamHost",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 7,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Liquid Web",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 8,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "JustHost",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 9,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "RafflePress",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 10,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "SeedProd",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 11,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "AdSanity",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 12,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Duplicator Pro",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },
    //     {
    //         id: 13,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "WP 2FA",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 14,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "OptinMonster",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 15,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Media Maestro",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

    //     {
    //         id: 16,
    //         CouponsAndDealsIcon: BlueHost,
    //         CouponsAndDealsTitle: "Imagely",
    //         CouponsAndDealsDisount: "40 % OFF"
    //     },

       
    // ]
    return (
        <>
            <section>
                <div className='wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30'>
                    {
                        showDis ?                     <div className='wpa-pro-services-content single-line-text-h2-line-height wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600'>
                        <h2>WPArena Coupons and Deals</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div> :null
                    }
                    <div className='wpa-coupons-and-deals-wrapper wpa-flex wpa-menu-items-gap wpa-content-top-bottom-spacing-30'>
                        {deals.map( (elem) => (
                            <Link to={"/"} className='wpa-coupons-and-deals-box wpa-flex'>
                            <div className='border'>
                            <div className='wpa-coupons-and-deals-box-icon'>
                            <img src={elem.featured_image} alt={elem.title.rendered} />
                            </div>
                            </div>
                            <div className='wpa-coupons-and-deals-box-content'>
                                <div className='wpa-coupons-and-deals-box-titile wpa-h4-font-size wpa-font-weight-600 wpa-btn-dark-color'>
                                    <h4>{elem.title}</h4>
                                </div>
                                <div className='wpa-coupons-and-deals-box-discount wpa-h5-font-size text-color-primary wpa-font-weight-600'>
                                    <h5>{elem.acf_fields['coupons_discount']} %OFF</h5>
                                </div>
                            </div>
                        </Link>
                        ) )}
                        
                    </div>
                    
                </div>
                <div class="wp-view-more-btn btn-primary-hover wpa-button-center"><button type="button">{butonLabel === "true" ? "VIEW ALL" : "LOAD MORE"}</button></div>
            </section>
        </>
    )
}

export default CouponsAndDeals;
