import React, { useState } from "react";
import "./AboutUs.css";
import img1 from "../../image/person2.png";

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
      id: 2,
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
      id: 3,
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
      id: 3,
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
  ]);

  const [activeCard, setActiveCard] = useState(null);

  const handleFlip = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="main-container">
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
                <img
                  src={item.profile.picture}
                  className="profilePic"
                  alt="profile"
                />
                <div className="position">{item.profile.position}</div>
                <div className="name">{item.profile.name}</div>
                <div className="social-icon">
                  <a href={item.social.linkedin}>
                    <img src="./images/link.png" alt="linkedIn" />
                  </a>
                  <a href={item.social.twitter}>
                    <img src="./images/twi.png" alt="Twitter" />
                  </a>
                  <a href={item.social.facebook}>
                    <img src="./images/fb.png" alt="Facebook" />
                  </a>
                  <a href={item.social.instagram}>
                    <img src="./images/insta.png" alt="Instagram" />
                  </a>
                </div>
              </div>

              {/* back */}
              <div className="back">
                <img src={img1} alt="back image" className="back-image" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
