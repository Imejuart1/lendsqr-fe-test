import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import UserDetails from './pages/UserDetails/UserDetails.tsx';
import Users from './pages/Users/Users.tsx';

const App: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Pass toggleSidebar function to Navbar */}
      {location.pathname !== '/' && (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          {/* Pass isSidebarOpen state to Sidebar */}
          <Sidebar isOpen={isSidebarOpen} />
        </>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details/:username" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App;
