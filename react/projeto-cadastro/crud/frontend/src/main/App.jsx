import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Footer from '../componentes/templates/Footer'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>