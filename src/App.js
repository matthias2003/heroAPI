import React from 'react';
import Nav from './Components/Nav/Nav.js';
import './App.css';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured.js';

function App() {
  return (
    <>
    <Nav></Nav>
    <main>
      <div className='container'>
        <HeroesFeatured />
      </div>
    </main> 
    <footer></footer>
    </>
  );
}

export default App;
