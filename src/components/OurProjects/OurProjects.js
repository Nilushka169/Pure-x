import React, { useState } from "react";
import backgroundImage1 from "../../image/project1.png";
import backgroundImage2 from "../../image/project2.jpg";
import backgroundImage3 from "../../image/project3.webp";
import backgroundImage4 from "../../image/project4.jpg";
import backgroundImage5 from "../../image/project5.jpg";
import "./OurProjects.css";

function OurProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([
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
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );

    // Shift the first item to the end of the array
    const shiftedItems = [...items.slice(1), items[0]];
    // Update the state with the new items order
    setItems(shiftedItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );

    // Pop the last item and add it to the beginning of the array
    const poppedItems = [items[items.length - 1], ...items.slice(0, -1)];
    // Update the state with the new items order
    setItems(poppedItems);
  };

  return (
    <div className="main-container">
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
    </div>
  );
}

export default OurProjects;
