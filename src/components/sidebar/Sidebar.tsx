
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.tsx";
import SubMenu from "./SubMenu.tsx";
import { IconContext } from "react-icons/lib";
import Union from '../../assets/images/Union.png';
import Lendsqr from '../../assets/images/lendsqr.png';
import Vector from '../../assets/images/vector.png';
import Bell from '../../assets/images/bell.png';
import Avatar from '../../assets/images/avatar (3).png';
import * as RiIcons from "react-icons/ri";
import "./Sidebar.scss"
import { Component } from 'react'

const Nav = styled.div`
  background: #FFFFFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:1rem;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2vw;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #FFFFFF;
  width: 20.58vw;
  display: flex;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
`;
 
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
 
  const showSidebar = () => setSidebar(!sidebar);

    return (
      <div> 
      <IconContext.Provider value={{ color: "#213F7D" }}>
        <Nav>
          <NavIcon to="#" >
            <div className="dashboard_logo">
            <img src={Union} className="union"/>
            <img src={Lendsqr} className="Lendsqr"/>
            </div>
            <FaIcons.FaBars className="hamburger" onClick={showSidebar} />

          </NavIcon>
         {/*<NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>*/}
        
            
           <form>
            < div className="search_here">
          <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Search for anything"/>
          <button className="styled-button" type="submit"><img src={Vector} /></button>
          <span className="Docs">Docs</span>
          <img src={Bell} className="bell"/>
          <img src={Avatar} className="avatar"/>
          <h6>Adedeji</h6>  <RiIcons.RiArrowDownSFill /><RiIcons.RiArrowUpSFill />,
          </div>
          </form>
          
        </Nav>
        <SidebarNav sidebar={sidebar} className="SidebarNav">
          <SidebarWrap>
            {SidebarData.map((item, index) => {
             return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
        </div>
    )
  }


export default Sidebar

