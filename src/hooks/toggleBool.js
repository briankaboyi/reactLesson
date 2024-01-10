import React, { useState } from 'react'

function useToggleBool() {
  const [bool, setBoolean] = useState(true);

  return {bool,setBoolean}
}

export default useToggleBool