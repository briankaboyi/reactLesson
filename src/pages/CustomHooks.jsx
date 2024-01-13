import React, { useContext, useState } from "react";
import useToggleBool from "../hooks/toggleBool";
import {  getContextData } from "../context/useContext";

function Customhooks() {
  const data = getContextData()
const {bool,setBoolean}=useToggleBool();
console.log("dfasf",data)

  return (
    <>
      <h1>{bool?"true":"false"}</h1>
      <div className="truefalse">
        <button onClick={() => setBoolean(true)}>true</button>
        <button onClick={() => setBoolean(false)}>false</button>
        <button onClick={() =>{setBoolean(!bool)}}>toggle</button>
      </div>
    </>
  );
}

export default Customhooks;

