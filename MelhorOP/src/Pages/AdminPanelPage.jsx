import React from "react";
import SidebarMenu from "../Components/SidebarMenu";
import AdminMain from "../Components/AdminMain";

export default function AdminPanelPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AdminMain />
    </div>
  );
}
