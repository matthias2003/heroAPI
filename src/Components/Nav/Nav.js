import React, { useState } from "react";
import logo from '../../assets/img/nav_logo.png'
import { Link } from "react-router-dom";
import search from "../../assets/icons/search.png";
import './Nav.css';

function Nav() {
    const [ searchInputValue, setSearchInputValue ] = useState('');

    return (
        <nav className="nav">
            <div className="container">
                <Link to="/"><img className="nav__logo" src={logo} alt="Superhero Database" /></Link>
                <div className="nav__search">
                    <input onChange={event => {setSearchInputValue(event.target.value)}} value={searchInputValue} type="text" name="search" placeholder="Search hero"
                           onKeyDown={ event => { if (event.key === "Enter") setSearchInputValue(event.target.value) } /* TODO: trzeba zrobić, żeby zatwierdzać enterem*/} ></input>
                    <Link to={`/search/${searchInputValue}`}><button><img src={search} alt="Search icon" /></button></Link>
                </div> 
            </div>
        </nav>
    );
}

export default Nav;