import React from "react";
import CadastroProduto from "../Components/CadastroProduto";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroProdutoPage() {
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1">
        <CadastroProduto />
      </div>
    </div>
  );
}
