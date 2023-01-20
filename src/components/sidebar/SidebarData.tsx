import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import Briefcase from  "../../assets/images/briefcase.png";
import Home from  "../../assets/images/home.png"
import Users from  "../../assets/images/ttt.png"
import Guarantors from  "../../assets/images/users.png"


 
export const SidebarData =  [
  {
    id:"1",
    title: "Switch Organization",
    path: "/switch-organization",
    icon: <img src={Briefcase} alt="briefcase"/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    
    subNav: [
    ],
  },
  {
    id:"2",
    title: "Dashboard",
    path: "/dashboard",
    icon: <img src={Home} alt="briefcase"/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
 
  },
  {
    id:"3",
    title: "CUSTOMERS",
    
  },
  {
    id:"4",
    title: "Users",
    path: "/users",
    icon: <img src={Users} alt="briefcase"/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
    ],
  },
  {
    id:"5",
    title: "Guarantors",
    path: "/guarantors",
    icon: <img src={Guarantors} alt="briefcase"/>,
  },
   {
    id:"6",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"5",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"6",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"7",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"8",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"9",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"10",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"11",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"12",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"13",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
   {
    id:"14",
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

