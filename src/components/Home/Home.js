import React, { useState } from "react";
import "./Home.css";
import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import Flower_Gallery from "./Flower_Gallery/Flower_Gallery";

function Home() {
  const [ismobileLinksOpen, setIsmobileLinksOpen] = useState(false);

  const dropdownmenuclick = () => {
    setIsmobileLinksOpen(!ismobileLinksOpen);
  };

  return (
    <div className="main-container">
      <header className="nav-margin">
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="Logo">
            <a href="/">
              <img src="./images/logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="main-uls">
            <a href="/">
              <li className="nav-container">
                <AiFillHome />
                Home
              </li>
            </a>
            <a href="/">
              <li className="nav-container">
                <RiProjectorFill />
                Our Projects
              </li>
            </a>
            <a href="/">
              <li className="nav-container">
                <FaExclamationCircle />
                About us
              </li>
            </a>
            <a href="/">
              <li className="nav-container">
                <IoMailOpen />
                Contact us
              </li>
            </a>
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
              className={ismobileLinksOpen ? "mobileLinks open" : "mobileLinks"}
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
        </motion.nav>
      </header>
      <div className="Middle-section">
        <div className="Left-side">
          <h1>left</h1>
        </div>
        <div className="Right-side">
          <Flower_Gallery/>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-center slider">
          
        </div>
      </div>
    </div>
  );
}

export default Home;




