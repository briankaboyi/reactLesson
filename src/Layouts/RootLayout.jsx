import React from 'react'
import {NavLink, Outlet} from "react-router-dom"

function RootLayout() {
  return (
    <div className='home'>
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="custom">CustomHooks</NavLink>
            <NavLink to="posts">Posts</NavLink>
        </nav>
        <main className='main'>
          <h1>ROOT LAYOUT</h1>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout