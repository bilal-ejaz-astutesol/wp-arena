import React from 'react'
import TeamZeshanSarwar from "../../assets/images/wpa-team-zeeshan-sarwar.png";
import zahrakashif from "../../assets/images/zahra-kashif.png";
import muhammadomerali from "../../assets/images/muhammad-omer-ali.png";
import './OurTeam.css';
const OurTeam = () => {
    return (
        <>
            <div className='wpa-our-team-mian'>

                <div className='wpa-wrapper-sides-spacing wpa-h2-font-size'>
                    <h2>OUR TEAM</h2>
                    <div className='wpa-our-team wpa-flex wpa-menu-items-gap'>
                        <div className='wpa-our-team-common '>
                            <div className='wpa-our-team-thumbnial'>
                                <img src={TeamZeshanSarwar} alt='nouman s. ghuman' />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>Managing Director</span>
                                <h4>Nouman S. Ghuman</h4>
                            </div>
                        </div>
                        <div className='wpa-our-team-common '>
                            <div className='wpa-our-team-thumbnial'>
                                <img src={TeamZeshanSarwar} alt='nouman s. ghuman' />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>Director $ Creative Editor</span>
                                <h4>Muhammad Zeeshan Sarwar</h4>
                            </div>
                        </div>
                        <div className='wpa-our-team-common wpa-h4-font-size'>
                            <div className='wpa-our-team-thumbnial'>
                                <img src={muhammadomerali} alt='nouman s. ghuman' />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>Cheif Financial Officer</span>
                                <h4>Muhammad Omer Ali</h4>
                            </div>
                        </div>
                        <div className='wpa-our-team-common '>
                            <div className='wpa-our-team-thumbnial'>
                                <img src={zahrakashif} alt='nouman s. ghuman' />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>HR Lead / Project Engineer</span>
                                <h4>Zahra Kashif</h4>
                            </div>
                        </div>
                    </div>
                    <div className='btn-dark btn-primary-hover  btn-primary'>
                        <button type="button" fdprocessedid="k9va2o">VIEW MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam
