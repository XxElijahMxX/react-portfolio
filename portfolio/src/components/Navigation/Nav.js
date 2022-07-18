import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import "./nav.css"

class Navigation extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 

    render() {
        return(
            <nav className='nav-Items'>
                <h1 className='nav-logo'>Sheridan's Portfolio</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>    
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                       return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}   
                                </a>
                            </li>
                       )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation