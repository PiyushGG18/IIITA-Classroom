
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar, { SidebarItem } from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  LayoutDashboard,
  Settings,
  BarChart3,
  ListTodo,
  CandlestickChart,
 } from "lucide-react";



function App() {
  return (
    <>
    
{/* <Header></Header> */}
<main className="App flex w-full">
<Sidebar>
<SidebarItem
icon={<LayoutDashboard size={20} />}
text="Dashboard" active
// alert
/>

<SidebarItem icon={<BarChart3 size={20} />} text="Attendence" />
<SidebarItem icon={<ListTodo size={20} />} text="To Do" />
<SidebarItem icon={<CandlestickChart size={20} />} text="Result" />
{/* <SidebarItem icon={<Package size={20} />} text="Orders" alert /> */}

<hr className="my-3" />
<SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
</Sidebar>
<Dashboard className="grow"></Dashboard>
</main>

</>
 
 );
}

export default App;
