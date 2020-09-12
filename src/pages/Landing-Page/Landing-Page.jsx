import React, {Fragment} from 'react'
import './Landing-Page.scss'
import AboutUs from '../About-Us/AboutUs.jsx'
import Services from '../Services/Services.jsx'
import Contact from '../Contact/Contact.jsx'



const Landing = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='inner-container'>
                    <h1 className='header-1'>Got freight? We haul!</h1>
                    <p className='body-text'>No matter how close or far, we'll get the job done. Licensed to pick up and drop off shipments <span className='bold'>nationwide</span>. Our transportation services include dry goods, refrigerated loads, half-loads and full-loads. If you need freight hauled with no stress? Say less and choose <span className='bold'>Cadxpress!</span></p>
                </div>
            </div>
            <AboutUs />
            <Services />
            <Contact />
        </Fragment>
    )
}

export default Landing;