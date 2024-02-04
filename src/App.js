import React, {useState} from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from './pages/Home';
import ThreeDay from './pages/ThreeDay';
import SevenDays from "./pages/SevenDays";
import FourteenDays from "./pages/FourteenDays";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

const App = function () {
    return (
        <div className="wrapper">
            <MainNav />
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/3d" element={<ThreeDay />} />
                        <Route path="/7d" element={<SevenDays />} />
                        <Route path="/14d" element={<FourteenDays />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}

export default App