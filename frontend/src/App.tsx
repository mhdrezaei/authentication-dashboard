import React from "react";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LoginForm from "./componnents/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
