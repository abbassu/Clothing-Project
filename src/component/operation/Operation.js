import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import "./operation.scss";

function Operation() {
  const nav = useNavigate();
  return (
    <div className="opaeration">
      <div className="kkk">
        <button
          className="aaa"
          onClick={() => {
            nav("/additem");
          }}
        >
          Add Item
          <br />
          <span className="ffff">
            <i class="fa-solid fa-plus"></i>
          </span>
        </button>

        <button
          className="uuu"
          onClick={() => {
            nav("/updateitem");
          }}
        >
          Update Item
          <br />
          <span className="ffff">
            <i class="fa-solid fa-gear"></i>
          </span>{" "}
        </button>

        <button
          className="mmm"
          onClick={() => {
            nav("/makesales");
          }}
        >
          Make Sales
          <br />
          <span className="ffff">
            <i class="fa-solid fa-poo-storm"></i>
          </span>{" "}
        </button>

        <button
          className="ddd"
          onClick={() => {
            nav("/deleteitem");
          }}
        >
          Delete Item
          <br />
          <span className="ffff">
            <i class="fa-solid fa-trash"></i>
          </span>{" "}
        </button>
        <br />
        <button
          className="aaa"
          onClick={() => {
            nav("/adddepartment");
          }}
        >
          Add Department
          <br />
          <span className="ffff">
            <i class="fa-solid fa-poo-storm"></i>
          </span>{" "}
        </button>

        <button
          className="ddd"
          onClick={() => {
            nav("/deletedepartment");
          }}
        >
          Delete Department
          <br />
          <span className="ffff">
            <i class="fa-solid fa-poo-storm"></i>
          </span>{" "}
        </button>

        <button
          className="uuu"
          onClick={() => {
            nav("/updatedepartment");
          }}
        >
          Update Department
          <br />
          <span className="ffff">
            <i class="fa-solid fa-poo-storm"></i>
          </span>{" "}
        </button>

        <button
          className="uuu"
          onClick={() => {
            nav("/testing");
          }}
        >
          testing
          <br />
          <span className="ffff">
            <i class="fa-solid fa-poo-storm"></i>
          </span>{" "}
        </button>
      </div>
    </div>
  );
}

export default Operation;
