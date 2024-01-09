import React, { useState } from 'react'

function Customhooks() {
    const [bool, setBoolean] = useState("true")
    function handleToggle() {
(bool==="true")?setBoolean("false"):setBoolean("true")
    }
    return (
        <>
            <h1>{bool}</h1>
            <div className="truefalse">
                <button onClick={()=>setBoolean("true")}>true</button>
                <button onClick={()=>setBoolean("false")}>false</button>
                <button onClick={() => handleToggle()}>toggle</button>
            </div>
        </>
    )
}

export default Customhooks
