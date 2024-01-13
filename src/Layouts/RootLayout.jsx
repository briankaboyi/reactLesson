import React, { useContext ,createContext, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {

  return (
    <div className='home'>
      <nav className="nav" style={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="custom">Custom</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="login" onClick={()=>localStorage.setItem("isLoggedIn","false")}><button>Logout</button></NavLink>
      </nav>
      <main className='main'>
        <h1>ROOT LAYOUT</h1>
          <Outlet />
      </main>
    </div>
  )
}

export default RootLayout