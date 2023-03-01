import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from "./componnents/LoginForm";
import UserContext, { userContextType } from "./context/userContext";
import hasJwt from "./helper/checkJwt";
import Dashboard from "./pages/Dashboard";

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
          element={
            isLogin ? <Navigate replace to="dashboard" /> : <LoginForm />
          }
        />
        <Route path="/dashboard" element={isLogin && <Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
