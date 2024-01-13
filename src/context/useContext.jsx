import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Context = createContext();
const getContextData = () => useContext(Context);

const UseContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    console.log("pathname changed");

    if (localStorage.getItem("isLoggedIn") === "false") {
      navigate("/");
    }
  }, [pathname]);

  const [data, setData] = useState("manasses");
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export { UseContextProvider, getContextData };
