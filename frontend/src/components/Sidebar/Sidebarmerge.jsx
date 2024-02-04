import { useState } from "react";
import "./Sidebar.css";
import Sidebar, { SidebarItem } from "./Sidebar";
import Dashboard from "../dashboard/Dashboard";
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

function Sidebarmerge() {
  return (
    <>
      {/* <Header></Header> */}
      <main className="App flex w-full">
        <Sidebar className="h-screen">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            // alert
          />

          <SidebarItem icon={<BarChart3 size={20} />} text="Attendence" />
          <SidebarItem icon={<ListTodo size={20} />} text="To Do" />
          <SidebarItem icon={<CandlestickChart size={20} />} text="Result" />
          <hr className="my-3" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <Dashboard className="grow"></Dashboard>
      </main>
    </>
  );
}

export default Sidebarmerge;
