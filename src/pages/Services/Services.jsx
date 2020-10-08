import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
      <div className='outer-container'>
          <div className='inner-container'>
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
          </div>
      </div>
  )
}

const StyledOuterDiv = styled.div`
display: flex;

`

export default Services;