import React from "react";
import CadastroCliente from "../Components/CadastroCliente";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroClientePage() {
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1">
        <CadastroCliente />
      </div>
    </div>
  );
}
