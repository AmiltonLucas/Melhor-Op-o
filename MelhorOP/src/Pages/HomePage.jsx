import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ComoFunciona from "../Components/ComoFunciona";
import Produtos from "../Components/Produtos";
import SobreNos from "../Components/SobreNos";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <>
        <Navbar />
        <Hero />
        <ComoFunciona />
        <Produtos />
        <SobreNos />
        <Footer />
        </>
    );
    }