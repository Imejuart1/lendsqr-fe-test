
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login.tsx';
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Users from "./pages/dashboard/Users.tsx";
import FetchAPI from './components/sidebar/FetchAPI.tsx';
import Userdetails from './pages/userdetails/Userdetails.tsx';
import Userfilters from './pages/dashboard/Userfilters.tsx';


function App() {
  const location = useLocation();
  console.log(location);
   return (
    
    <div className="App">
      {/*setup to show sidebar in the pages*/}
      {(location.pathname === "/users")  && (<><Sidebar/></>)}
      {(location.pathname === "/userdetails")  && (<><Sidebar/></>)}
      {(location.pathname === "/userfilters")  && (<><Sidebar/></>)}

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/userdetails" element={<Userdetails/>} />
       <Route path="/users" element={<Users/>} />
       <Route path="/userfilters" element={<Userfilters/>} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>

    </div>
  );
}
export default App;
