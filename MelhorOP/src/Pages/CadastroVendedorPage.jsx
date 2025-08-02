import React from "react";
import CadastroVendedor from "../Components/CadastroVendedor";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroVendedorPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-full max-w-md">
          <CadastroVendedor />
        </div>
      </div>
    </div>
  );
}
