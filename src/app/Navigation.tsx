import React from 'react';
import { Routes, Route } from "react-router-dom";

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Test1 />}  />
            <Route path="about" element={<Test />} />
            <Route path='*' element={<Error404/>} />
        </Routes>
    );
};

function Test() {
    return (
        <div>
            <h1>wolas que hay</h1>
        </div>
    )
}

function Test1() {
    return (
        <div>
            <h3>wolas como estas</h3>
        </div>
    )
}

function Error404() {
    return(
        <div>
            <h1>RUTA NO ENCONTRADA</h1>
        </div>
    )
}