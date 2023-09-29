import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/bc.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Transportation</ServicesH2>
          <ServicesP>State of the art license plate recognition.   Traffic and driver pattern analysis. </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Finance</ServicesH2>
          <ServicesP>Economic forecasting and fraud detection.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Business Intelligence</ServicesH2>
          <ServicesP>Targeted marketing.    Consumer reccomendations.  Automated customer service.  Supply chain optimization and quality control.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Blockchain</ServicesH2>
          <ServicesP>Bringing the power of Ai to the realm of Crypto and FinTech.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
