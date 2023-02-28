import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from "./componnents/LoginForm";
import UserContext, { userContextType } from "./context/userContext";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isLogin } = useContext(UserContext) as userContextType;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? <Navigate replace to="dashboard" /> : <LoginForm />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
