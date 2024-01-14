import React, { useState } from "react";
import "./AboutUs.css";
import img2 from "../../image/back.png";

function AboutUs() {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          profile: {
            picture: "url(person1.jpg)",
            position: "position 1",
            name: "person 1"
          },
          social: {
            linkedin: "",
            twitter:"",
            facebook:"",
            instagram:"",
            },
        },
        {
          id: 2,
          profile: {
            picture: "url(person2.jpg)",
            position: "position 2",
            name: "person 2"
          },
          social: {
            linkedin: "",
            twitter:"",
            facebook:"",
            instagram:"",
            },
        },
        
      ],
    };
  }



  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div>
      <div className="h-screen centered">
        <div onClick={handleFlip} className={`card-container`}>
          <div className={`card ${activeCard ? "cardFlip" : ""}`}>
            <div className="card-inner">
              {this.state.items.map((item) => (
                <div key={item.id} className="item">
                  {/* front */}
                  <div className="front">
                    <div className="profilePic">{item.profile.picture}</div>
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
                    <div className="nothing">See more...</div>
                  </div>

                  {/* back */}
                  <div className="back">
                    <img src={img2} alt="image" className="img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
