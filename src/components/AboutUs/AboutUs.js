import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import img1 from "../../image/person2.png";
import PageName from "../PageName";

function AboutUs() {
  const [items] = useState([
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 1",
        name: "person 1",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 2",
        name: "person 2",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 3",
        name: "person 3",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 4",
        name: "person 4",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 5",
        name: "person 5",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 6",
        name: "person 6",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 7",
        name: "person 7",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 8",
        name: "person 8",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 9",
        name: "person 9",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 10",
        name: "person 10",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 11",
        name: "person 11",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      id: 1,
      profile: {
        picture: img1,
        position: "position 12",
        name: "person 12",
      },
      social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
  ]);

  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };


  useEffect(() => {
    let timeoutId;

    if (activeCard !== null) {
      timeoutId = setTimeout(() => {
        setActiveCard(null);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [activeCard]);

  return (
    <div className="full-page">
      <PageName nameProp="About Us" />
      <div className="aboutUs-main-container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="card-container"
            onClick={() => handleFlip(index)}
          >
            <div className={`card ${activeCard === index ? "cardFlip" : ""}`}>
              <div className="card-inner">
                {/* front */}
                <div className="front">
                  <div className="profilePic-container">
                    <span className="profileBackground"></span>
                    <img
                      src={item.profile.picture}
                      className="profilePic"
                      alt="profile"
                    />
                  </div>
                  <h2 className="position">{item.profile.position}</h2>
                  <h3 className="name">{item.profile.name}</h3>
                  <div className="social-icons" onClick={handleLinkClick}>
                    <a href={item.social.linkedin} target="_blank">
                      <img src="./images/link.png" alt="linkedIn" />
                    </a>
                    <a href={item.social.twitter} target="_blank">
                      <img src="./images/twi.png" alt="Twitter" />
                    </a>
                    <a href={item.social.facebook} target="_blank">
                      <img src="./images/fb.png" alt="Facebook" />
                    </a>
                    <a href={item.social.instagram} target="_blank">
                      <img src="./images/insta.png" alt="Instagram" />
                    </a>
                  </div>
                </div>

                {/* back */}
                <div className="back">
                  <h1>Description</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
