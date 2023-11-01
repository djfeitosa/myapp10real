import { useState } from "react";
import "./ToggleButtonColor.css";

function ToggleButtonColor(color) {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
        >
        {backgroundColor === "#1b1b1b" ? "Back Theme" : "White Theme"}  
        </button>
        <section className="content">
          <h1>
            Welcome To <br/> A <br />
            Real World
          </h1>
        </section>
      </section>
    </>
  );
}

export default ToggleButtonColor;
