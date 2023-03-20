import React, { useState } from "react";
import logo from '../../assets/img/nav_logo.png'
import { Link, useNavigate } from "react-router-dom";
import search from "../../assets/icons/search.png";
import './Nav.css';

function Nav() {
    const [ searchInputValue, setSearchInputValue ] = useState('');
    const navigate = useNavigate();

    const searchHandle = (searchInputValue) => {
        if (searchInputValue && !(searchInputValue.includes('/'))) {
            navigate(`/search/${searchInputValue}`);
        }
    }   


    
    return (
        <nav className="nav">
            <div className="container">
                <Link to="/"><img className="nav__logo" src={logo} alt="Superhero Database" /></Link>
                <div className="nav__search">

                        <input onChange={event => { setSearchInputValue(event.target.value)}} value={searchInputValue} type="text" name="search" placeholder="Search hero"
                           onKeyDown={event => { if (event.key === "Enter") {searchHandle(searchInputValue)}}}></input>
                
                        <button onClick={() => searchHandle(searchInputValue)}><img src={search} alt="Search icon" /></button>

                </div> 
            </div>
        </nav>
    );
}

export default Nav;