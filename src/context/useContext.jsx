import React, { Children, createContext, useContext, useState } from "react";

   export const Context = createContext();
 
const  UseContextProvider = ({ children }) => {
  
  const [data, setData] = useState("manasses");
  return (
    <Context.Provider value={data}>{children}</Context.Provider>
  );
}; 

export default UseContextProvider;
