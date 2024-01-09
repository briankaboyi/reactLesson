import React, { useContext } from 'react'
import { LoginContext } from '../App'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [loggin,setLoggedIn]=useContext(LoginContext)
  if(loggin){
    return <Navigate to="users"/>
  }
  return (
    <div>Home
      <button onClick={()=>setLoggedIn(true)}>Login</button>
    </div>
  )
}
