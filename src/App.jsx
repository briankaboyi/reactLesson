import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './RootLayout'
import Contact from './contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Contact />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
