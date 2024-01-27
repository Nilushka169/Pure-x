import React from "react";
import { useEffect, useState } from "react";
import { IoMdRocket } from "react-icons/io";

function BackToTop(){
    const[backToTop,setBackToTop] = useState(false);


    useEffect(() =>{
    window.addEventListener("scroll",() => {
        if (window.scrollY > 200){
            setBackToTop(true);
        } else {
            setBackToTop(false);
        }
    });
}, []);


const scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};

return (
  <div className="BackToUp">
    {backToTop && (
      <button
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "45px",
          width: "45px",
          fontSize: "35px",
          fontWeight: "900",
          border: "none",
          borderRadius: "50%",
          zIndex: "3333333",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onClick={scrollUp}
      >
        <IoMdRocket />
      </button>
    )}
  </div>
);
}
export default BackToTop;