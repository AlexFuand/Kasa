import React from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './pages/Home/Home'
import Error from './pages/error/error'
import About from './pages/about/about'
import Card from './pages/Card/Card';
import about from './datas/about.json'


function App(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element = {<Navigate replace to="/accueil"/>} />
                <Route path="/accueil" element = {<Home/>} />
                <Route path="/about" element = {<About data={about} />} />
                <Route path="*" element= {<Error />} />
                <Route path="/product/:id" element= {<Card />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App  