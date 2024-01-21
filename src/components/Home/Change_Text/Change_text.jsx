import React from "react";
import "./Change_text.css";
import { Typewriter } from "react-simple-typewriter";

const Change_Text = () => {
  return (
    <div className="App" style={{ borderLeft: "10px solid #083663" }}>
      <h1
        style={{
          paddingTop: "2.7rem",
          paddingInlineStart: "10px",
          margin: "auto",
          fontSize: "4.5rem",
          fontWeight: "900",
          color: "white",
          fontFamily: "",
        }}
      >
        We Are <br /> Covering
        <br />{" "}
        <span
          style={{
            fontSize: "3.7rem",
            color: "white",
          }}
        >
          <Typewriter
            words={[
              "Web Development.",
              "Mobile App Development.",
              "University Assignment",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={35}
            deleteSpeed={15}
            delaySpeed={1000}
          />
        </span>{" "}
      </h1>
    </div>
  );
};

export default Change_Text;
