import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div style={{ fontWeight: '200', fontFamily: 'Ubuntu' }} className='Footer p-3 px-4 container-fluid text-white p-lg-5 bg-black'>
                <div className="row mx-lg-5">
                    <div className="col-lg-3 m-lg-0 my-3  " >
                        <h2 >Our Products
                        </h2>
                        <div className='bg-muted mb-lg-3 mb-2' style={{ width: '190px', height: '2px', backgroundColor: '#808080' }}></div>

                        <div className='my-lg-2' ><Link to="/solarmodule"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Solar PV Module</Link></div>
                        <div className='my-lg-2' ><Link to="/libattery"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Lithium Batteries</Link></div>
                        <div className='my-lg-2' ><Link to="/inverter"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp; Hybrid Inverters</Link></div>
                        <div className='my-lg-2' ><Link to="/solarwaterheater"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Solar Water Heater</Link></div>
                        
                        

                    </div>
                    <div className="col-lg-3 m-lg-0 my-3 " >
                        <h2 >Quick Links
                        </h2>
                        <div className='bg-muted mb-lg-3 mb-2' style={{ width: '190px', height: '2px', backgroundColor: '#808080' }}></div>

                        <div className='my-lg-2' ><a href="/about"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Company Profile</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Events</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp; Gallery</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Quality</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp; Innovation</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp; How Solar Works </a></div>

                    </div>
                    <div className="col-lg-3 m-lg-0 my-3 " >
                        <h2 >Our Address
                        </h2>
                        <div className='bg-muted mb-lg-3 mb-2' style={{ width: '190px', height: '2px', backgroundColor: '#808080' }}></div>

                        <div className='my-lg-2' ><a href="#"> 
                             <span className='font-weight-bold'> 
                            Indivm Energy Private Limited </span> <br /> 
                            <FontAwesomeIcon icon={faLocationDot}>
                            </FontAwesomeIcon> &nbsp;
                            Sonepat Ganaur Road, Opposite Sakar Kui Mandir Sonepat - 131001 <br /> </a></div>
                        <div className='my-lg-2' ><a href="tel:+91 9518220044"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> &nbsp; +91 9518220044 </a></div>
                        <div className='my-lg-2' ><a href="mailto:indivmenergy@gmail.com"> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> &nbsp; indivmenergy@gmail.com</a></div>
                        <div className='my-lg-2' ><a href="mailto:indivmenergy@gmail.com"> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> &nbsp; indivmenergy@outlook.com</a></div>


                    </div>
                </div>
            </div>
        </>
    )
}
