import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import UserDetails from './pages/UserDetails/UserDetails.tsx';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/user-details' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
