import "./App.css";
import RootLayout from "./Layouts/RootLayout";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Customhooks from "./pages/CustomHooks";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import { createContext, useState } from "react";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    // <LoginContext.Provider value={[loggedIn, setLoggedIn]}>

    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Contact />} />
        <Route path="custom" element={<Customhooks />} />
        <Route path="posts" element={<Posts />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
    // </LoginContext.Provider>
  );
}

export default App;
