import React, { Children, createContext, useState } from "react";
const context = createContext();
const [data, setData] = useState("manasses");
const UseContextProvider = ({ Children }) => {
  return (
    <context.Provider value={{ data1: data }}>{Children}</context.Provider>
  );
};

export default UseContextProvider;
