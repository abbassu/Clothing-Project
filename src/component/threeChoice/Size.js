import React, { useEffect, useState } from "react";
import "./size.scss";
const Size = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [up, setUp] = useState(props.fontSizes);

  const [groupOfSize, setGroupOfSize] = useState(props.groupOfSize);
  const deleteSelectedSize = (newSize) => {
    setGroupOfSize((prevSizes) => prevSizes.filter((size) => size !== newSize));
    console.log("ddddd", selectedSize);
  };

  const handleSizeChange = async (event) => {
    const newSize = event.target.value;

    if (selectedSize == "") {
      setSelectedSize(newSize);
    } else {
      await props.returnSelectedSize(selectedSize);
      setSelectedSize(newSize);
    }
  };

  useEffect(() => {
    props.update({ size: selectedSize, quantity: 1 }, props.index);
    props.deleteSelectedSize(selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    props.update({ size: selectedSize, quantity: quantity }, props.index);
  }, [quantity]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity != 0) setQuantity(quantity - 1);
    else {
    }
  };

  return (
    <>
      {up?.map(() => {
        return (
          <div className="sizes">
            <div>
              <div className="alkammeyah">
                <label htmlFor="fontSize">
                  {props.fromsize ? (
                    <>اختر الحجم المناسب :</>
                  ) : (
                    <>اختر اللون المناسب :</>
                  )}
                </label>
              </div>

              <select
                id="fontSize"
                value={"kkkkkkk"}
                onChange={handleSizeChange}
              >
                <option value={selectedSize}>{selectedSize}</option>
                {props.groupOfSize?.map((size, index) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="alkammeyah">
                <label htmlFor="quantity"> الكمية : &nbsp; </label>
                <button onClick={increaseQuantity}>
                  <i class="fa-solid fa-plus"></i>
                </button>{" "}
                &nbsp;
                <button onClick={decreaseQuantity}>
                  {" "}
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>

              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>

            {/* <ul>
              <span className="listsizes">
                {props.fromsize ? (
                  <>الأحجام المتبقية :&nbsp;</>
                ) : (
                  <> الألوان المتبقية : &nbsp;</>
                )}
              </span>
              {props.groupOfSize.map((item, index) => {
                return (
                  <span key={index}>
                    {item}{" "}
                    {index < props.groupOfSize.length - 1 ? (
                      <i class="fa-solid fa-minus"></i>
                    ) : (
                      ""
                    )}
                  </span>
                );
              })}
            </ul> */}
          </div>
        );
      })}
    </>
  );
};

export default Size;
