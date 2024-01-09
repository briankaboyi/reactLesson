import React, { useState } from "react";
import useToggleBool from "../hooks/toggleBool";

function Customhooks() {
const {bool,setBoolean}=useToggleBool();

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

