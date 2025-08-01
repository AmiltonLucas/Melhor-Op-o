import React from "react";
import SidebarMenu from "../Components/SidebarMenu";
import AdminMain from "../Components/AdminMain";

export default function AdminPanelPage() {
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <AdminMain />
    </div>
  );
}
