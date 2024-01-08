import React from 'react'

export default function useLocalstorage() {
    // localStorage.setItem("payload",JSON.stringify(payload))
    function handleSaveLocal(pay){
        localStorage.setItem("payload",JSON.stringify(pay))
    }
    const name = "dsfadfafasdfadddddddddddddddddd"
  return{
  handleSaveLocal,name
  }
}
