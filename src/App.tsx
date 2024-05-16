// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import UserDetails from './pages/UserDetails/UserDetails.tsx';
import { UserProvider } from './components/contexts/UserContext.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-details/:username" element={<UserDetails />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
