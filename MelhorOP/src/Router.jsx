import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AdminPanelPage from "./Pages/AdminPanelPage";
import CadastroClientePage from "./Pages/CadastroClientePage";
import CadastroProdutoPage from "./Pages/CadastroProdutoPage";
import CadastroVendaPage from "./Pages/CadastroVendaPage";
import CadastroVendedorPage from "./Pages/CadastroVendedorPage";
import ClientesPage from "./Pages/ClientesPage";
import ProdutosPage from "./Pages/ProdutosPage";
import VendasPage from "./Pages/VendasPage";
import VendedoresPage from "./Pages/VendedoresPage";
import EditarClientePage from "./Pages/EditarClientePage";
import EditarProdutoPage from "./Pages/EditarProdutoPage";
import EditarVendaPage from "./Pages/EditarVendaPage";
import EditarVendedorPage from "./Pages/EditarVendedorPage";
import EsqueciSenhaPage from "./Pages/EsqueciSenhaPage";
import AlterarSenhaPage from "./Pages/AlterarSenhaPage";
import Error404 from "./Error/Error404";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/vendas" element={<VendasPage />} />
        <Route path="/vendedores" element={<VendedoresPage />} />
        <Route path="/cadastro-cliente" element={<CadastroClientePage />} />
        <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
        <Route path="/cadastro-venda" element={<CadastroVendaPage />} />
        <Route path="/cadastro-vendedor" element={<CadastroVendedorPage />} />
        <Route path="/editar-cliente/:id" element={<EditarClientePage />} />
        <Route path="/editar-produto/:id" element={<EditarProdutoPage />} />
        <Route path="/editar-venda/:id" element={<EditarVendaPage />} />
        <Route path="/editar-vendedor/:id" element={<EditarVendedorPage />} />
        <Route path="/esqueci-senha" element={<EsqueciSenhaPage />} />
        <Route path="/alterar-senha" element={<AlterarSenhaPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
