import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Footer from '../componentes/templates/Footer'
import Home from '../componentes/home/Home'

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
