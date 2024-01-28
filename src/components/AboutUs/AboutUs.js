import React, { useRef, useState } from 'react';
import "./AboutUs.css";
import DataAnalytics from "./Icon/data-analytics.svg"
import Nearshore from "./Icon/nearshore.svg"
import ProductDesign from "./Icon/product-design.svg"
import ProductFundamentals from "./Icon/product-fundamentals.svg"
import SoftwareDevelopment from "./Icon/software-development.svg"
import TechnologyConsulting from "./Icon/technology-consulting.svg"
import AboutUsCard from './About_Cards/AboutUsCard';
import journey from "./Icon/journey-img.svg"
import CountUp from 'react-countup';
import TabListFun from './ToolsAndTechnologies/ToolsAndTechnologies';
import { motion, useInView } from "framer-motion";

function AboutUs() {
  const serviceCardsData = [
    {
      icon: ProductDesign,
      title: "Product Design",
      description: "Human-centered design for engaging customer experiences",
      /* delay: 0.8, */
    },
    {
      icon: ProductFundamentals,
      title: "Product Fundamentals",
      description: "Defining and validating your product’s success",
      /* delay: 1.3, */
    },
    {
      icon: Nearshore,
      title: "Nearshore Software Development​",
      description: "Accelerate development with Agile Nearshore teams",
      /* delay: 1.8, */
    },
    {
      icon: DataAnalytics,
      title: "Data Analytics",
      description: "Unlock business insights with user-centric data analytics",
     /*  delay: 2.3, */
    },
    {
      icon: SoftwareDevelopment,
      title: "Software Development",
      description: "Agile, full-stack software development for modern solutions",
      /* delay: 2.8, */
    },
    {
      icon: TechnologyConsulting,
      title: "Technology Consulting",
      description: "Modernize your business with expert technology consulting",
      /* delay: 3.3, */
    },
  ];



  const ref = useRef(null);

  const isInView = useInView(ref, {amount: 0.45 , once:true }) ;  //element eke 0.3 k penna thiyeddi animate wenn patan gnnwa

   const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

 const Title={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,

    transition:{
      duration:0.5
    },
  },
 };

 const ImageAnime ={
  hidden:{
    y:-10,
    opacity:0
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5
    }
  }
 }


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

      
      <section className='section2' ref={ref}>
        <h1 className='sectionTitle'>&#60;Our Services&#47;&#62;</h1>

                <motion.ul
          className="OurServicesContainer"
          
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}  // 0.5k penna awoth visible wenwa naththm hidden wenwa
        >
          {serviceCardsData.map((card, index) => (
            <motion.li key={index} className="ServiceCardContainer" variants={item}>
              
                <motion.img src={card.icon} alt={`Service Card ${index + 1}`} variants={ImageAnime}/>   
                <motion.h1 key={index} variants={Title}>

                  {card.title}

                </motion.h1>
                <motion.h2 key={index} variants={Title}>

                  {card.description}

                </motion.h2>
                </motion.li>
          ))}
        </motion.ul>

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
                      duration={2}
                      delay={0.2}
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
                        duration={2}
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
                        duration={2}
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
                      duration={2}
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
                      duration={2}
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