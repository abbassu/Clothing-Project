// ChildComponent.js
import React, { createContext } from "react";

export const DetailsData = createContext({});

function DetailsDataProvider({ children }) {
  const initObject = {
    color: 1,
    photo_url: "",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };

  return (
    <DetailsData.Provider initObject={initObject}>
      {" "}
      {children}{" "}
    </DetailsData.Provider>
  );
}
