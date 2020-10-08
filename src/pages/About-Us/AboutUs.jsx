import React from 'react'
import '../About-Us/About-Us.scss'

const AboutUs = () => {
    return (
        <div className='about-us-outer-container'>
            <div className='about-us-inner-container'>
              <h1 className='about-us-header-1'>Operating Principles</h1>
              <h2 className='about-us-header-2'>Reliability</h2>
              <p>We're road warriors and even pickup and drop off on holidays. We've found that the best way to do business is to pretend the shipment we've picked up needs to be dropped off yesterday. Putting your needs first is the bridge to building lasting relationships.</p>
            </div>
            <div className='about-us-inner-container'>
              <h2 className='about-us-header-2'>Communication/Integrity</h2>
              <p>The essense of business is beingn able to communicate with your clients at the moment something doesn't go according to plan and not waiting until the last moment. Trust is key and our goal is to establish trust not just with our words, but with our actions.</p>
            </div>
            <div className='about-us-inner-container'>
              <h2 className='about-us-header-2'>True Partnership</h2>
              <p>We're in this together and the understanding that if your load doesn't get delivered on time affects us just as much as it affects you, so if you need a freight hauled with no stress? Say less and choose <span className='bold'>Cadxpress!</span></p>
            <h1>Services</h1>
            <ul>
              <li>Nationwide hauling</li>
              <li>2 drivers = 20 hours of driving per day per truck (under normal circumstances)</li>
              <li>Dry loads</li>
              <li> Refrigerated loads</li>
              <li>Single item</li>
              <li>Half load</li>
              <li>Full load (up to 45,000lbs)</li>
            </ul>
            <h1>Contact Us</h1>
            <h2>Communication is a must so don’t hesitate to get in touch...</h2>
            <p>Office Hours 7-6 CST M-F and Sat/Sun 11-5 <strong>(leave a message after hours and we’ll get back to you within 4 hours guaranteed).</strong></p>
            <h3 style={{textAlign: 'center', marginTop: '30px'}}><a href='tel:XXX-XXX-XXXXX'>XXX-XXX-XXXX</a> | <a href='mailto:cadxpresstrucking@gmail.com'>cadxpresstrucking@gmail.com</a></h3>
            </div>
            </div>
    )
}

export default AboutUs;