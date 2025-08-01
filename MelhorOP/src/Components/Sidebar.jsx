import React from "react";
import SidebarMenu from "./SidebarMenu";
import AdminMain from "./AdminMain";

export default function Sidebar() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <SidebarMenu />
      <AdminMain />
    </div>
  );
}
