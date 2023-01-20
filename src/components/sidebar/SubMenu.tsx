import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Sidebar.scss"
 



const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: -1rem;
  margin-top:2rem;
list-style: none;
  text-decoration: none;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color:black;
  &:hover {
    border-left: 2px solid black;
    color:blue;
    cursor: pointer;
  }
`;


const SidebarLabel = styled.span`
 padding-left:1rem;
`;

 
const DropdownLink = styled(Link)`
  
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
 
  &:hover {
    cursor: pointer;
  }
`;

 
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav);
 
  return (
    <>
    
       
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
          <div >
          {item.icon}
          <SidebarLabel >{item.title}</SidebarLabel>
           <SidebarLabel>{item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}</SidebarLabel>
            </div>
           </SidebarLink>
      
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel >{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
 
export default SubMenu;