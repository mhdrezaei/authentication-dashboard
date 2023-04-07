import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch , useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import UserContext, { userContextType } from "./context/userContext";
import hasJwt from "./helper/checkJwt";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddCompany from "./pages/AddCompany";

function App() {
  const dispatch = useDispatch();
  // const isDarkMode = useSelector((state : RootState) => state.ui.isDark)
  const { isLogin, confirmLogin } = useContext(UserContext) as userContextType;
  const signIn = hasJwt();
  if (signIn) {
    confirmLogin();
  }

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate replace to="dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isLogin ? <Dashboard /> : <Navigate replace to="/" />}
        />
        <Route
          path="/add-company"
          element={isLogin ? <AddCompany /> : <Navigate replace to="/" />}
        />
        
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
