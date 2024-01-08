import './App.css'
import RootLayout from './Layouts/RootLayout'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Customhooks from './pages/customHooks'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Contact />} />
          <Route path="custom" element={<Customhooks />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
