import React from 'react';
import './App.css';
import Navbar from "./components/header/Header";
import Router from "./components/router/router";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router/>
            <Footer/>
        </div>
    )
}

export default App;
