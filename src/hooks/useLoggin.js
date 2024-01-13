import React from "react";
import { useNavigate } from "react-router-dom";

const useLoggin = () => {
  const navigate = useNavigate();
  const actualUser = localStorage.getItem("username");
  const actualPassword = localStorage.getItem("password");

  function handleLoggin(payload) {
    if (
      payload.username === actualUser &&
      payload.password === actualPassword
    ) {
      navigate("/");
      localStorage.setItem("isLoggedIn", "true");
    } else {
      navigate("/login");
      localStorage.setItem("isLoggedIn", "false");
    }
  }
  return { handleLoggin };
};

export default useLoggin;
