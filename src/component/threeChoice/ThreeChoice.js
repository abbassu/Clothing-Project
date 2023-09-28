import React, { useState } from "react";
import FontSizeComboBox from "../listsize/Listsize";
import ColorWithSize from "./ColorWithSize";
import Color from "./Color";
import ArraySize from "./ArraySize";
import Size from "./Size";
import "./fotall.scss";
import ArrayColor from "./ArrayColor";
import ArrayColorWithSize from "./ArrayColorWithSize";
function RadioButtonExample() {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [fontSize, setFontSize] = useState([1]);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    setVisibility(true);
  };

  return (
    <div className="selectedchoics">
      <div className="threechoice">
        <div>
          <label>
            <input
              type="radio"
              value="radio1"
              checked={selectedRadio === "radio1"}
              onChange={handleRadioChange}
            />
            Size With Color
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="radio2"
              checked={selectedRadio === "radio2"}
              onChange={handleRadioChange}
            />
            Size
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="radio3"
              checked={selectedRadio === "radio3"}
              onChange={handleRadioChange}
            />
            Color
          </label>
        </div>
      </div>

      <div className="radioarray">
        {selectedRadio === "radio1" && <ArrayColorWithSize />}
        {selectedRadio === "radio2" && <ArraySize />}
        {selectedRadio === "radio3" && <ArrayColor />}
      </div>
    </div>
  );
}

export default RadioButtonExample;
