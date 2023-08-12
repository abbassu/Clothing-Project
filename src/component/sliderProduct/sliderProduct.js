import React, { useEffect } from "react";
import ImageSlider from "../imageslider/ImageSlider";
import { useState } from "react";
import "./sliderProduct.scss";
function SliderProduct(props) {
  // console.log("PPPP", props.im);
  // console.log("PPPP", props.information);

  const ffff = {
    name: "",
    cost: "",
    makesalary: 0,
    percent: "",
  };
  const [info1, setinfo1] = useState(ffff);

  useEffect(() => {
    setinfo1(props.information);
    console.log("PPPP", props.information);
  }, [props.information]);

  console.log("0000000000000000000", info1);
  return (
    <div>
      <div className="pproductcard">
        {/* <div className="salesPercent">خصم %{info1.percent} </div> */}

        <div className="imgslider">
          <ImageSlider
            arrayOfImage={props.im}
            percent={info1.percent}
            makesalary={info1.makesalary}
          />
        </div>
        <div className="addtioninformation">
          <div dir="rtl">
            <div className="textname">
              <strong> {info1?.name} </strong>
            </div>
            {info1?.makesalary ? (
              <>
                <div>
                  <div className="afteroffer">
                    {" "}
                    <strong className="">
                      {info1?.cost - info1?.cost * (info1.percent / 100)}{" "}
                    </strong>
                    <i class="fa-solid fa-shekel-sign"></i>
                  </div>
                  <div className="">
                    <span className="beforeoffer"> {info1.cost}</span>
                    <span className="inoffer">خصم %{info1.percent} </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="afteroffer" dir="rtl">
                  <strong>{info1?.cost} </strong>
                  <i class="fa-solid fa-shekel-sign"></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderProduct;
