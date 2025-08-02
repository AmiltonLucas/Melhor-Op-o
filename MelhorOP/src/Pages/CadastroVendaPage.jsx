import React from "react";
import CadastroVenda from "../Components/CadastroVenda";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroVendaPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-full max-w-md">
          <CadastroVenda />
        </div>
      </div>
    </div>
  );
}
