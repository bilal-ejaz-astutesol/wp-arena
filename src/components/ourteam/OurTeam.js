import React from 'react'
import TeamZeshanSarwar from "../../assets/images/wpa-team-zeeshan-sarwar.png";
import zahrakashif from "../../assets/images/zahra-kashif.png";
import muhammadomerali from "../../assets/images/muhammad-omer-ali.png";
import ShahidAnwer from "../../assets/images/wpa-shahid-anwer.jpg";
import jhazibZaman from "../../assets/images/jhazib-zaman.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './OurTeam.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Number of items to show on desktop
      slidesToSlide: 1, // Optional: slides to slide at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 3, // Number of items to show on tablet
      slidesToSlide: 1, // Optional: slides to slide at a time
    },
    mobile: {
      breakpoint: { max: 575, min: 480 },
      items: 2, // Number of items to show on mobile
      slidesToSlide: 1, // Optional: slides to slide at a time
      arrows: true
    },
    sm_mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1, // Number of items to show on mobile
        slidesToSlide: 1, // Optional: slides to slide at a time
        arrows: false
      },
  };
  const teamMembers = [
    { name: 'Jazib Zaman', designation:'Cheif Executive Officer' , image : jhazibZaman },
    { name: 'Shahid Anwer', designation: 'Chief Technology Officer' , image: ShahidAnwer },
    { name: 'Muhammad Omer Ali',  designation:'Cheif Financial Officer' , image: muhammadomerali },
    { name: 'Zahra Kashif',  designation:'HR Lead / Project Engineer' , image: zahrakashif },
  ];
const OurTeam = () => {
    return (
        
        <>
   
            <div className='wpa-our-team-mian'>

                <div className='wpa-wrapper-sides-spacing wpa-h2-font-size'>
                    <h2>OUR TEAM</h2>
                    {/* <div className='wpa-our-team wpa-flex wpa-menu-items-gap'>
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
                    </div>  */}
                    
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        showDots={false}
                        arrows={false} // Disable arrows
                    >
                        <div className='wpa-our-team wpa-flex'>
                        {teamMembers.map((member, index) => (
                            <div key={index} className='wpa-our-team-common wpa-h4-font-size'>
                                <div className='wpa-our-team-thumbnial'>
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className='wpa-h4-font-size wpa-team-content'>
                                    <span>{member.designation}</span>
                                    <h4>{member.name}</h4>
                                </div>
                            </div>
                        ))}
                        </div>
                    </Carousel>
                    {/* <div className='btn-dark btn-primary-hover  btn-primary'>
                        <button type="button" fdprocessedid="k9va2o">VIEW MORE</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default OurTeam
