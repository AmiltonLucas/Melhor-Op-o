import React from "react";
import AlterarSenha from "../Components/AlterarSenha";
import SidebarMenu from "../Components/SidebarMenu";

export default function AlterarSenhaPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarMenu />
      <div className="flex-1 flex items-center justify-center">
        <AlterarSenha />
      </div>
    </div>
  );
}
