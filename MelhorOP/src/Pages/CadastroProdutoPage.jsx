import React from "react";
import CadastroProduto from "../Components/CadastroProduto";
import SidebarMenu from "../Components/SidebarMenu";

export default function CadastroProdutoPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-full max-w-md">
          <CadastroProduto />
        </div>
      </div>
    </div>
  );
}
