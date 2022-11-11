import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main classname="content">
            Conteúdo
        </main>
    </React.Fragment>