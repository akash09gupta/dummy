import React, { Component, useState } from 'react'
import NavBar from './NavBar'

function Delete() {
    const [showNav, setShowNav] = useState(false);
    return (
      <div>
        <button onClick={()=>setShowNav(true)} className="bg-danger">Click me</button>

        {showNav && <NavBar/>}
      </div>    
    )
}

export default Delete
