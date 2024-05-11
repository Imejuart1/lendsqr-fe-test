import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
