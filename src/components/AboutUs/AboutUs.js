import React from 'react';
import "./AboutUs.css";
import DataAnalytics from "./Icon/data-analytics.svg"
import Nearshore from "./Icon/nearshore.svg"
import ProductDesign from"./Icon/product-design.svg"
import ProductFundamentals from"./Icon/product-fundamentals.svg"
import SoftwareDevelopment from "./Icon/software-development.svg"
import TechnologyConsulting from"./Icon/technology-consulting.svg"
import AboutUsCard from './About_Cards/AboutUsCard';
import journey from "./Icon/journey-img.svg"
import CountUp /*, { useCountUp } */ from 'react-countup';
import TabListFun from './ToolsAndTechnologies/ToolsAndTechnologies';

function AboutUs() {
  return (
    <div className='AboutUS-main-container' id="aboutus">
      <section className='section1'>
        <div className='AboutUsTitleContainer'>
          <div className='AboutUsTitle'>
            <h3>About Pure-X</h3>
            <h1>Bringing the </h1><br/>
            <h1>World Closer</h1><br/>
            <h1>with Nearshore</h1>
            <br/>
            <h3>We hatch ideas into software solutions <br/>that achieve your desired outcomes <br/>faster.</h3>
          </div>

        </div>
      </section>
      <section className='section2'>
        <h1 className='sectionTitle'>&#60;Our Services&#47;&#62;</h1>
          <div className='OurServicesContainer'>
            <div className='ServiceCardContainer'>
              <div className='ServiceCard'>
                <img src={ProductDesign} alt="Typescript_logo"/>
                <h1>Product Design</h1>
                <h2>Human-centered design for engaging customer experiences​</h2>
              </div>
            </div>
            <div className='ServiceCardContainer'>
                <div className='ServiceCard'>
                  <img src={ProductFundamentals} alt="Typescript_logo"/>
                  <h1>Product Fundamentals</h1>
                  <h2>Defining and validating your product’s success</h2>
                </div>
            </div>
              <div className='ServiceCardContainer'>
                <div className='ServiceCard'>
                  <img src={Nearshore} alt="Typescript_logo"/>
                  <h1>Nearshore Software Development​</h1>
                  <h2>Accelerate development with Agile Nearshore teams</h2>
                </div>
            </div>
              <div className='ServiceCardContainer'>
                <div className='ServiceCard'>
                  <img src={DataAnalytics} alt="Typescript_logo"/>
                  <h1>Data Analytics</h1>
                  <h2>Unlock business insights with user-centric data analytics</h2>
                </div>
              </div>
              <div className='ServiceCardContainer'>
                <div className='ServiceCard'>
                  <img src={SoftwareDevelopment} alt="Typescript_logo"/>
                  <h1>Software Development</h1>
                  <h2>Agile, full-stack software development for modern solutions</h2>
                </div>
              </div>
              <div className='ServiceCardContainer'>
                <div className='ServiceCard'>
                  <img src={TechnologyConsulting} alt="Typescript_logo"/>
                  <h1>Technology Consulting</h1>
                  <h2>Modernize your business with expert technology consulting</h2>
                </div>
              </div>
            </div>
      </section>
      <section className='section3'>
        <h1 className='sectionTitle'>&#60;Tools and Technologies&#47;&#62;</h1>
          <div className='TechnologiesContainer'>
            <TabListFun/>
          </div>
      </section>
      <section className='section4'>
        <h1 className='sectionTitle'>&#60;A Treak Record Of Excellence And Happy Customers&#47;&#62;</h1>
          <div className='PercentageContainer'>
            <div className='Top'>
              <div className='counterContainer'>
                  <CountUp className='counter'
                      enableScrollSpy={true}
                      scrollSpyDelay={1000}
                      start={0}
                      end={4}
                      duration={3}
                      delay={0.3}
                      separator=" "
                      decimals={0}
                      decimal=","
                      prefix=" "   //left side of counter
                      suffix=""     //right side of counter
                      >
                  </CountUp>
                  <h3>Years of Experience</h3>
                  </div>
            </div>
            <div className='Middle'>
              <div className='ImgContainer'>
                <img src={journey} alt='journey'/>
              </div>
            </div>
            <div className='aside Left'>
              <div className='counterContainer'>
                <CountUp className='counter'
                        enableScrollSpy={true}
                        scrollSpyDelay={1000}
                        start={0}
                        end={80}
                        duration={3.5}
                        delay={0.3}
                        separator=" "
                        decimals={0}
                        decimal=","
                        prefix=" "   //left side of counter
                        suffix="+"     //right side of counter
                        >
                    </CountUp>
                    <h3>Clients</h3>
                  </div>
                  <div className='counterContainer'>
                <CountUp className='counter'
                        enableScrollSpy={true}
                        scrollSpyDelay={1000}
                        start={0}
                        end={170}
                        duration={4}
                        delay={0.3}
                        separator=" "
                        decimals={0}
                        decimal=","
                        prefix=" "   //left side of counter
                        suffix="+"     //right side of counter
                        >
                    </CountUp>
                    <h3>SUCCESSFULLY PROJECT</h3>
                  </div>
            </div>
            <div className='aside Right'>
              <div className='counterContainer'>
               <CountUp className='counter'
                      enableScrollSpy={true}
                      scrollSpyDelay={1000}
                      start={0}
                      end={8}
                      duration={3}
                      delay={0.3}
                      separator=" "
                      decimals={0}
                      decimal=","
                      prefix=" "   //left side of counter
                      suffix=""     //right side of counter
                      >
                  </CountUp>
                  <h3>SKILLED DEVELOPERS</h3>
                  </div>
                  <div className='counterContainer'>
               <CountUp className='counter'
                      enableScrollSpy={true}
                      scrollSpyDelay={1000}
                      start={0}
                      end={4.9}
                      duration={3}
                      delay={0.3}
                      separator=" "
                      decimals={1}
                      decimal="."
                      prefix=" "   //left side of counter
                      suffix="/5"     //right side of counter
                      >
                  </CountUp>
                  <h3>Rating</h3>
                  </div>
                  
            </div>
            {/* <div className='Bottom'>Bottom</div> */}
          </div>
      </section>
      <section className='section5'>
        <h1 className='sectionTitle'>&#60;Meet Our Experts&#47;&#62;</h1>
        <AboutUsCard/>
      </section>
    </div>
  )
}

export default AboutUs;