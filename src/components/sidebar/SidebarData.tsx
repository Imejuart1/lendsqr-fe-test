import React from "react";
import * as RiIcons from "react-icons/ri";
import Briefcase from  "../../assets/images/briefcase.png";
import Home from  "../../assets/images/home.png"
import Users from  "../../assets/images/ttt.png"
import Guarantors from  "../../assets/images/users.png"
import Decision from "../../assets/images/Decision.png"
import Savings from "../../assets/images/savings.png"
import Loans from "../../assets/images/Loans.png"
import Auditlogs from "../../assets/images/Audit logs.png"
import Fees from "../../assets/images/fees.png"
import Karma from "../../assets/images/karma.png"
import Loanproducts from "../../assets/images/Loan products.png"
import Loanrequests from "../../assets/images/loan requests.png"
import Organization from "../../assets/images/organization.png"
import Preferences from "../../assets/images/Preferencces.png"
import Pricing from "../../assets/images/pricing.png"
import Reports from "../../assets/images/Reports.png"
import Serviceacc from "../../assets/images/Service acc.png"
import Settlements from "../../assets/images/Settlements.png"
import Systemlog from "../../assets/images/System log.png"
import Transactions from "../../assets/images/transactions.png"
import Whitelist from "../../assets/images/whitelist.png"
import Services from "../../assets/images/Services.png"
import Signout from "../../assets/images/sign-out 1.png"
 



 
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
   
  },
  {
    id:"5",
    title: "Guarantors",
    path: "/guarantors",
    icon: <img src={Guarantors} alt="briefcase"/>,
  },
   {
    id:"6",
    title: "Loans",
    path: "/loans",
    icon: <img src={Loans} alt="briefcase"/>,
  },
   {
    id:"7",
    title: "Decision Models",
    path: "/decision",
    icon: <img src={Decision} alt="briefcase"/>,
  },
   {
    id:"6",
    title: "Savings",
    path: "/savings",
    icon: <img src={Savings} alt="briefcase"/>,
  },
   {
    id:"7",
    title: "Loan Requests",
    path: "/support",
    icon: <img src={Loanrequests} alt="briefcase"/>,
  },
   {
    id:"8",
    title: "Whitelist",
    path: "/whitelist",
    icon: <img src={Whitelist} alt="briefcase"/>,
  },
   {
    id:"9",
    title: "Karma",
    path: "/support",
    icon: <img src={Karma} alt="briefcase"/>,
  },
   {
    id:"10",
    title: "BUSINESSES",
    
   
  },
   {
    id:"11",
    title: "Organization",
    path: "/support",
    icon: <img src={Organization} alt="briefcase"/>,
  },
   {
    id:"12",
    title: "Loan Prroducts",
    path: "/support",
    icon: <img src={Loanproducts} alt="briefcase"/>,
  },
   {
    id:"13",
    title: "Saving Products",
    path: "/support",
    icon: <img src={Savings} alt="briefcase"/>,
  },
   {
    id:"14",
    title: "Fee and Charges",
    path: "/support",
    icon: <img src={Fees} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Transactions",
    path: "/support",
    icon: <img src={Transactions} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Services",
    path: "/support",
    icon: <img src={Services} alt="briefcase"/>,
  },

    {
    id:"14",
    title: "Service Account",
    path: "/support",
    icon: <img src={Services} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Settlements",
    path: "/support",
    icon: <img src={Settlements} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Reports",
    path: "/support",
    icon: <img src={Reports} alt="briefcase"/>,
  },
    {
    id:"15",
    title: "SETTINGS",
    
  },

    {
    id:"14",
    title: "Prefrences",
    path: "/support",
    icon: <img src={Preferences} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Fees and Pricing",
    path: "/support",
    icon: <img src={Fees} alt="briefcase"/>,
  },
    {
    id:"14",
    title: "Audit Logs",
    path: "/support",
    icon: <img src={Auditlogs} alt="briefcase"/>,
  },
   {
    id:"14",
    title: "System Managements",
    path: "/support",
    icon: <img src={Systemlog} alt="briefcase"/>,
  },
     {
    id:"34",
    title: "Logout",
    path: "/",
    icon: <img src={Signout} alt="briefcase"/>,
  },
];

