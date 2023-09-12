import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/">
            <h1 className='navbar-title'>Damián Arrieta</h1>
            </a>
            <p className='navbar-subtitle'>Developer, Customer Sales, Services and Logistics Specialist</p>
        </div>
        <div className="navbar-right">
            <div className="navbar-links">
            <a href="#about-me">About Me,</a>
            <a href="#skills">Skills,</a>
            <a href="#projects">Projects</a>
            </div>
        </div>
    </nav>
  )
}
