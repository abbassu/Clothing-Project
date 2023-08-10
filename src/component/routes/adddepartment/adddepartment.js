import React from "react";
import ImageSlider from "../../imageslider/ImageSlider";
import "./adddepr.scss";
function Adddepartment() {
  let b = 140;
  let f = 20;
  let offer = 1;
  return (
    <div className="testdepart">
      <div className="pproductcard">
        <ImageSlider />
        <div className="addtioninformation">
          <div dir="rtl">
            <strong>لابتوب ديل XPS</strong>
            <br />
            {offer ? (
              <>
                <div>
                  <div className="afteroffer">
                    {" "}
                    <strong className="">{b - b * (20 / 100)} </strong>
                    <i class="fa-solid fa-shekel-sign"></i>
                  </div>
                  <div className="">
                    <span className="beforeoffer"> {b}</span>
                    <span className="inoffer">خصم %{f} </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="afteroffer" dir="rtl">
                  <strong>{b} </strong>
                  <i class="fa-solid fa-shekel-sign"></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pproductcard">
        <ImageSlider />
        <div className="addtioninformation">
          <div dir="rtl">
            <strong>لابتوب ديل XPS</strong>
            <br />
            {offer ? (
              <>
                <div>
                  <div className="afteroffer">
                    {" "}
                    <strong className="">{b - b * (20 / 100)} </strong>
                    <i class="fa-solid fa-shekel-sign"></i>
                  </div>
                  <div className="">
                    <span className="beforeoffer"> {b}</span>
                    <span className="inoffer">خصم %{f} </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="afteroffer" dir="rtl">
                  <strong>{b} </strong>
                  <i class="fa-solid fa-shekel-sign"></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pproductcard">
        <ImageSlider />
        <div className="addtioninformation">
          <div dir="rtl">
            <strong>لابتوب ديل XPS</strong>
            <br />
            {offer ? (
              <>
                <div>
                  <div className="afteroffer">
                    {" "}
                    <strong className="">{b - b * (20 / 100)} </strong>
                    <i class="fa-solid fa-shekel-sign"></i>
                  </div>
                  <div className="">
                    <span className="beforeoffer"> {b}</span>
                    <span className="inoffer">خصم %{f} </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="afteroffer" dir="rtl">
                  <strong>{b} </strong>
                  <i class="fa-solid fa-shekel-sign"></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pproductcard">
        <ImageSlider />
        <div className="addtioninformation">
          <div dir="rtl">
            <strong>لابتوب ديل XPS</strong>
            <br />
            {offer ? (
              <>
                <div>
                  <div className="afteroffer">
                    {" "}
                    <strong className="">{b - b * (20 / 100)} </strong>
                    <i class="fa-solid fa-shekel-sign"></i>
                  </div>
                  <div className="">
                    <span className="beforeoffer"> {b}</span>
                    <span className="inoffer">خصم %{f} </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="afteroffer" dir="rtl">
                  <strong>{b} </strong>
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

export default Adddepartment;
