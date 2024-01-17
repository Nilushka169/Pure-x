import React from "react";

const PageName = ({ nameProp }) => {
  return (
    <>
      <div
        className="side-container"
        style={{
          /* position: "fixed", */
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="pagename"
          style={{
            position: "relative",
            top: "50%",
            color: "rgba(0, 0, 0, 0.2)",
            transform: "translate(0, -50%)",
            textTransform: "uppercase",
            fontSize: "4rem",
            fontWeight: "bolder",
            letterSpacing: " 5px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1",
            padding: "0",
            margin: "0",
          }}
        >
          <div>{nameProp}</div>
        </div>
      </div>
    </>
  );
};

export default PageName;
