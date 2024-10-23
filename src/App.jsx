import React, {useState, useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Auth from './components/Auth.jsx';
import Home from "./components/Home.jsx";
import Calendar from "./components/Calender.jsx";

function App() {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {isAuthenticated ? (
              <>
                <Routes>
                  <Route path="/" element={<Auth />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/Calender" element={<Calendar />} />
                </Routes>
              </>
            ) : (
              <>
                <Auth />
              </>
          )}
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
