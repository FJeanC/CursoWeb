import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props => 
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem path="/" property="fa fa-home" text="Início"/>
            <NavItem path="/users" property="fa fa-users" text="Usuários" />
            {/* <a href="#">
                <i className="fa fa-home"></i>
                Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i>
                Usuários
            </a>
             */}
        </nav>
    </aside>