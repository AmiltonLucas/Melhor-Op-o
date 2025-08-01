import React from "react";
import CadastroVenda from "../Components/CadastroVenda";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroVendaPage() {
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1">
        <CadastroVenda />
      </div>
    </div>
  );
}
