import React, { useState } from "react";
import "./Home.css";
import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";

function Home() {
  const [ismobileLinksOpen, setIsmobileLinksOpen] = useState(false);

  const dropdownmenuclick = () => {
    setIsmobileLinksOpen(!ismobileLinksOpen);
  };

  return (
    <div className="main-container">
      <div className="home-decorate-image">
        <img src="./contactMailDark.svg" alt="Home-Screen" />
      </div>
      <div className="home-decorate-image-mobile">
        <img src="./contactMailDark.svg" alt="Home-Screen" />
      </div>

      <nav>
        <div className="Logo">
          <a href="/">
            <img src="./logo.png" alt="Logo" />
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
              <img src="./link.png" alt="linkedIn" />
            </a>
            <a href="/">
              <img src="./twi.png" alt="Twitter" />
            </a>
            <a href="/">
              <img src="./fb.png" alt="Facebook" />
            </a>
            <a href="/">
              <img src="./insta.png" alt="Instagram" />
            </a>
          </div>
          <div className="dropdownmenu" onClick={dropdownmenuclick}>
            {ismobileLinksOpen ? <FaWindowClose /> : <TiThMenuOutline />}
          </div>
          <div
            className={ismobileLinksOpen ? "mobileLinks open" : "mobileLinks"}
          >
            <ul>
              <a href="/">
                <li>
                  <AiFillHome />
                  Home
                </li>
              </a>
              <a href="/">
                <li>
                  <RiProjectorFill />
                  Our Projects
                </li>
              </a>
              <a href="/">
                <li>
                  <FaExclamationCircle />
                  About us
                </li>
              </a>
              <a href="/">
                <li>
                  <IoMailOpen />
                  Contact us
                </li>
              </a>
              <div className="social-icon-mobile">
                <a href="/">
                  <img src="./link.png" alt="linkedIn" />
                </a>
                <a href="/">
                  <img src="./twi.png" alt="Twitter" />
                </a>
                <a href="/">
                  <img src="./fb.png" alt="Facebook" />
                </a>
                <a href="/">
                  <img src="./insta.png" alt="Instagram" />
                </a>
              </div>
            </ul>
          </div>
        </ul>
      </nav>
      <div className="topic">
        <h1>
          PURE<span>-X</span>
        </h1>
        <div className="second-topic">
          <h3>Software</h3>
          <h3>Solutions</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
