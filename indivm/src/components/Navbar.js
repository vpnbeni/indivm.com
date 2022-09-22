import React from 'react'

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
                    <button id='navbarToggleBtn' className="navbar-toggler m-1 mx-3 p-1 " style={{backgroundColor:'#ca9d10',color:'#004d4c'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse d-lg-block me-5 justify-content-end navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav pt-4 ps-4 p-lg-0  pt-lg-0 p-3  mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="/about">ABOUT US</a>
                            </li>
                            
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" data-bs-toggle="dropdown">  PRODUCTS  </a>
                                <ul className="dropdown-menu" style={{backgroundColor:"#004d4c"}}>
                                    <li><a className="dropdown-item" href="/solarmodule"> Solar PV Module</a></li>
                                    <li><a className="dropdown-item" href="/libattery"> Lithium Batteries  </a></li>
                                    <li><a className="dropdown-item" href="/inverter"> Hybrid Inverters</a></li>
                                    <li><a className="dropdown-item" href="/solarwaterheater"> Solar Water Heater</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" data-bs-toggle="dropdown">  OUR SUBSIDIARIES  </a>
                                <ul className="dropdown-menu" style={{backgroundColor:"#004d4c"}}>
                                    <li><a className="dropdown-item" href="#"> Oscar Electric Vehicles</a></li>
                                    <li><a className="dropdown-item" href="#">Dew Engineering Works </a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#">CONTACT US</a>
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
