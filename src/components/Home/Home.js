import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import Change_Text from "./Change_Text/Change_text";
/* import FlowerGallery from "./Flower_Gallery/FlowerGallery"; */

function Home() {
  const [ismobileLinksOpen, setIsmobileLinksOpen] = useState(false);

  const dropdownmenuclick = () => {
    setIsmobileLinksOpen(!ismobileLinksOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-container" id="home">
      <header className="nav-margin">
        <motion.nav
          className={`nav ${scrollPosition >= 50 ? "scrolled" : ""}`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.2 }}
        >
          <div className="Logo">
            <a href="/">
              <img src="./images/logo.png" alt="Logo" />
              PURE-X
            </a>
          </div>
          <div className="linkWithIcon">
            <ul className="main-uls">
              <Link
                to="home"
                spy={true}
                offset={0}
                smooth={true}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  <AiFillHome />
                  Home
                </li>
              </Link>
              <Link
                to="ourprojects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  <RiProjectorFill />
                  Our Projects
                </li>
              </Link>
              <Link
                to="aboutus"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  <FaExclamationCircle />
                  About us
                </li>
              </Link>
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                <li
                  className={`nav-container ${
                    scrollPosition >= 50 ? "scrolled" : ""
                  }`}
                >
                  <IoMailOpen />
                  Contact us
                </li>
              </Link>
              <div className="social-icon">
                <a href="/">
                  <img src="./images/link.png" alt="linkedIn" />
                </a>
                <a href="/">
                  <img src="./images/twi.png" alt="Twitter" />
                </a>
                <a href="/">
                  <img src="./images/fb.png" alt="Facebook" />
                </a>
                <a href="/">
                  <img src="./images/insta.png" alt="Instagram" />
                </a>
              </div>
              <div className="dropdownmenu" onClick={dropdownmenuclick}>
                {ismobileLinksOpen ? <FaWindowClose /> : <TiThMenuOutline />}
              </div>
              <div
                className={
                  ismobileLinksOpen ? "mobileLinks open" : "mobileLinks"
                }
              >
                <ul>
                  <a href="Home">
                    <li>
                      <AiFillHome />
                      Home
                    </li>
                  </a>
                  <a href="#OurProjects">
                    <li>
                      <RiProjectorFill />
                      Our Projects
                    </li>
                  </a>
                  <a href="#AboutUs">
                    <li>
                      <FaExclamationCircle />
                      About us
                    </li>
                  </a>
                  <a href="ContactUs">
                    <li>
                      <IoMailOpen />
                      Contact us
                    </li>
                  </a>
                  <div className="social-icon-mobile">
                    <a href="/">
                      <img src="./images/link.png" alt="linkedIn" />
                    </a>
                    <a href="/">
                      <img src="./images/twi.png" alt="Twitter" />
                    </a>
                    <a href="/">
                      <img src="./images/fb.png" alt="Facebook" />
                    </a>
                    <a href="/">
                      <img src="./images/insta.png" alt="Instagram" />
                    </a>
                  </div>
                </ul>
              </div>
            </ul>
          </div>
        </motion.nav>
      </header>
      <div className="Middle-section">
        <div className="Left-side">
          <div>
            <img src="./images/logo3d.png" alt="logo"/>
          </div>
        </div>
        <div className="Right-side">
          {/* <FlowerGallery/> */}

          {/* Text changing part */}

          <div className="changeText">
            <Change_Text/>
          </div>



        </div>
      </div>
      <div className="Bottom-section">
        <LanguageLine/>
      </div>
    </div>
  );
}

export default Home;
