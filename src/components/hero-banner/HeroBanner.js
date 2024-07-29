import React, { useState, useEffect } from 'react'
import wp_arena_top_banner from '../../assets/images/wp-arena-tp-banner.png';
import './HeroBanner.css';

const HeroBanner = () => {
    const [form, setForm] = useState(null);

    // useEffect(() => {
    //     fetch(`https://stg-wparena-staging.kinsta.cloud/wp-json/frm/v2/forms/26`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Fetched form data:', data); // Log the entire form data
    //             setForm(data);
    //         })
    //         .catch(error => console.error('Error fetching form:', error));
    // }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     fetch(`https://stg-wparena-staging.kinsta.cloud/wp-json/frm/v2/forms/26/entries`, {
    //         method: 'POST',
    //         body: JSON.stringify(Object.fromEntries(formData.entries())),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Form submitted successfully:', data);
    //         })
    //         .catch(error => console.error('Error submitting form:', error));
    // };

    // if (!form) {
    //     return <div>Loading form...</div>;
    // }

    // console.log('Form state:', form); // Log the form state

    // Check if form.fields exists and is an array
    // const fields = Array.isArray(form.fields) ? form.fields : [];
    // console.log('Fields:', fields); // Log the fields
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <section>
                <div className='wpa-hero-wrapper'>
                    <div className='wpa-wrapper-sides-spacing wpa-flex wpa-space-between'>
                        <div className='wpa-hero-section-content wpa-section-top-bottom-spacing wpa-h1-font-size wpa-col-4'>
                            <div className='wpa-content-top-bottom-spacing wpa-line-height-h1'>
                                <h1>World's Best Wordpress Tutorials & Resources</h1>
                            </div>
                            <div className='wpa-content-top-bottom-spacing wpa-paragraph-text gray-text-color wpa-font-weight-600 wpa-hero-text-p'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='wpa-start-now-for-free wpa-margin-top-bottom-20'>
                                <form onSubmit={handleSubmit}>
                                    {/* {fields.length > 0 ? (
                                        fields.map((field) => (
                                            <div key={field.id}>
                                                <input
                                                    type={field.type || 'text'}
                                                    name={field.name}
                                                    placeholder={field.placeholder || `${field.name}: *`}
                                                    required={field.required}
                                                />
                                            </div>
                                        ))
                                    ) : ( */}
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email: *"
                                                required
                                            />
                                        </div>
                                    
                                    <button type='submit'>Start Now</button>
                                </form>
                            </div>
                        </div>
                        <div className='wpa-herosection-right-image'>
                            <img src={wp_arena_top_banner} alt='Hero section' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner