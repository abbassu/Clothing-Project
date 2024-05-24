import React, { useState } from "react";
import FontSizeComboBox from "../listsize/Listsize";
import ColorWithSize from "./ColorWithSize";
import Color from "./Color";
import ArraySize from "./ArraySize";
import Size from "./Size";
import "./fotall.scss";
import ArrayColor from "./ArrayColor";
import ArrayColorWithSize from "./ArrayColorWithSize";
function RadioButtonExample(props) {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [fontSize, setFontSize] = useState([1]);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    setVisibility(true);
    props.changeStateRequest(event.target.value);
  };

  return (
    <div className="selectedchoics">
      <div className="threechoice">
        <div>
          <label>
            <input
              type="radio"
              value="1"
              checked={selectedRadio === "radio1"}
              onChange={handleRadioChange}
            />
            الوان وأحجام
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="2"
              checked={selectedRadio === "radio2"}
              onChange={handleRadioChange}
            />
            احجام
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="3"
              checked={selectedRadio === "radio3"}
              onChange={handleRadioChange}
            />
            الوان
          </label>
        </div>
      </div>

      <div className="radioarray">
        {selectedRadio === "1" && (
          <ArrayColorWithSize
            handleAllImagesInAllChild={props.handleAllImagesInAllChild}
            editarray={props.editarray}
            initObjectState={props.initObjectState}
            changeStateDetails={props.changeStateDetails}
            array_CS={props.array_CS}
            setArrayOfCS={props.setArrayOfCS}
          />
        )}
        {selectedRadio === "2" && (
          <ArraySize changeStateDetails={props.changeStateDetails} />
        )}
        {selectedRadio === "3" && (
          <ArrayColor changeStateDetails={props.changeStateDetails} />
        )}
      </div>
    </div>
  );
}

export default RadioButtonExample;
