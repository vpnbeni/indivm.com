import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
   
    return (
        <>
            <div className='position-absolute d-flex fixed-top navTop ' >
                <div className='position-absolute d-flex navRibben' >
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#c39e37' }} > </div>
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#cdb153' }} > </div>
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#2b2a28' }} > </div>
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#467070' }} > </div>
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#2f4a4a' }} > </div>
                    <div className='parallelogram p-0 m-0' style={{ backgroundColor: '#1f4c4b' }} > </div>
                </div>
            </div>

            <nav className="navbar position-absolute fixed-top p-0 navbar-expand-lg bg-dark ">
                <div className="container-fluid p-0 m-0 d-flex justify-content-end" >
                    <button id='navbarToggleBtn' className="navbar-toggler m-1 mx-3 p-1 " style={{ backgroundColor: '#ca9d10', color: '#004d4c' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse accordion d-lg-block me-5 justify-content-end navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav pt-4 ps-4 p-lg-0  pt-lg-0 p-3  mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active js-scroll-trigger" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active js-scroll-trigger" aria-current="page" to="/about">ABOUT US</Link>
                            </li>

                            <li className="nav-item mx-2 dropdown">
                                <Link className="nav-link text-white dropdown-toggle" to="/solarmodule" data-bs-toggle="dropdown">  PRODUCTS  </Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#004d4c" }}>
                                    <li><Link className="dropdown-item" to="/solarmodule"> Solar PV Module</Link></li>
                                    <li><Link className="dropdown-item" to="/libattery"> Lithium Batteries  </Link></li>
                                    <li><Link className="dropdown-item" to="/inverter"> Hybrid Inverters</Link></li>
                                    <li><Link className="dropdown-item" to="/solarwaterheater"> Solar Water Heater</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" data-bs-toggle="dropdown">  OUR SUBSIDIARIES  </a>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#004d4c" }}>
                                    <li><Link className="dropdown-item" to="/"> Oscar Electric Vehicles</Link></li>
                                    <li><Link className="dropdown-item" to="/">Dew Engineering Works </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active js-scroll-trigger" aria-current="page" to="/gallery">GALLERY</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="position-absolute  logo d-flex fix-top  d-inline   "   >
                    <img className='m-auto pb-2 pt-2 pb-lg-3 px-lg-4 px-2' src={require("../img/indivm logo.png")} alt="" style={{ objectFit: 'cover', height: 'inherit' }} />
                    <div id='triangle-right'></div>
                </div>
            </nav>


        </>
    )
}
