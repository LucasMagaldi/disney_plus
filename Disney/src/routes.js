import React from "react";

import Login from "./Components/Login";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}