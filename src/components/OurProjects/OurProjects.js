import React, { useState } from "react";
import backgroundImage1 from "../../image/project1.png";
import backgroundImage2 from "../../image/project2.jpg";
import backgroundImage3 from "../../image/project3.webp";
import backgroundImage4 from "../../image/project4.jpg";
import backgroundImage5 from "../../image/project5.jpg";
import "./OurProjects.css";

function OurProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      backgroundImage: `url(${backgroundImage1})`,
      name: "FirstProject",
      description: "The description about the first project",
    },
    {
      backgroundImage: `url(${backgroundImage2})`,
      name: "SecondProject",
      description: "The description about the second project",
    },
    {
      backgroundImage: `url(${backgroundImage3})`,
      name: "ThirdProject",
      description: "The description about the third project",
    },
    {
      backgroundImage: `url(${backgroundImage4})`,
      name: "FourthProject",
      description: "The description about the fourth project",
    },
    {
      backgroundImage: `url(${backgroundImage5})`,
      name: "FifthProject",
      description: "The description about the fifth project",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <div className="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "item active" : "item"}
            style={{ backgroundImage: item.backgroundImage }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="description">{item.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default OurProjects;
