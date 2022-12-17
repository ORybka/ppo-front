import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "../routes/Router";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="content-container">
                <Router/>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
