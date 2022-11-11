import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Main from '../componentes/templates/Main'
import Footer from '../componentes/templates/Footer'

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Main icon="home" title = "Início" 
            subtitle="Segundo projeto do capítulo de React"/>
        <Footer />
    </div>
