import React, { useRef, useState } from 'react'
import useLocalstorage from './hooks/useLocalstorage'

function Contact() {

    const nameRef= useRef()
    const messageRef= useRef()
    const local = useLocalstorage()
    const {handleSaveLocal,name}=useLocalstorage()
  
    function handleSubmit(e){
        e.preventDefault()
        const payload = {
            name:nameRef.current.value,
            message:messageRef.current.value
        }
         handleSaveLocal(payload)
    }
   console.log(name)

  return (
    <div className='contact'>
        
        <form action="" onSubmit={()=>handleSubmit()}>
            <label >name</label>
            <input type="text" name='name' ref={nameRef}/>
            <label >message</label>
            <input type="text" name='message' ref={messageRef}/>
            <button type='submit' onClick={(e)=>handleSubmit(e)}>submit</button>
        </form>
    </div>
  )
}

export default Contact