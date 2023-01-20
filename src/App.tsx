import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login.tsx';
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Users from "./pages/dashboard/Users.tsx";
import FetchAPI from './components/sidebar/FetchAPI.tsx';
import Userdetails from './pages/userdetails/Userdetails.tsx';


function App() {
  const location = useLocation();
  console.log(location);
   return (
    
    <div className="App">
      {/*setup for account settings in the side bar*/}
      {(location.pathname === "/users")  && (<><Sidebar/></>)}
      {(location.pathname === "/userdetails")  && (<><Sidebar/></>)}

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/userdetails" element={<Userdetails/>} />
       <Route path="/users" element={<Users/>} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>

    </div>
  );
}
export default App;




{/* import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs.tsx";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services.tsx";
import { Events, EventsOne, EventsTwo } from "./pages/Events.tsx";
import Contact from "./pages/ContactUs.ts";
import Support from "./pages/Support.tsx";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-us/aim' element={<OurAim/>} />
        <Route path='/about-us/vision' element={<OurVision/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router>
  );
}
   
export default App;*/}