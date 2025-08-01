import React from "react";
import CadastroVendedor from "../Components/CadastroVendedor";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroVendedorPage() {
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1">
        <CadastroVendedor />
      </div>
    </div>
  );
}
