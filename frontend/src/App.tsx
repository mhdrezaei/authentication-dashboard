import React, { useContext } from "react";
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

function App() {
  const { isLogin, confirmLogin } = useContext(UserContext) as userContextType;
  const signIn = hasJwt();
  if (signIn) {
    confirmLogin();
  }
  return (
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
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
