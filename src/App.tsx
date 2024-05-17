import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import UserDetails from './pages/UserDetails/UserDetails.tsx';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-details/:username" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App