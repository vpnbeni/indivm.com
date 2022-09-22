import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
            <div style={{ fontWeight: '200', fontFamily: 'Ubuntu' }} className='Footer p-3 px-4 container-fluid text-white p-lg-5 bg-black'>
                <div className="row mx-lg-5">
                    <div className="col-lg-3 m-lg-0 my-3  " >
                        <h2 >Our Products
                        </h2>
                        <div className='bg-muted mb-lg-3 mb-2' style={{ width: '190px', height: '2px', backgroundColor: '#808080' }}></div>

                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Spark 72 Cells Poly-Series</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Spark 72 Cells Mono-PERC-Series</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp; Spark 144 Cells Rapid-Series-Poly</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Spark 144 Cells Rapid-SeriesMono</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Spark BIPV Solar Panels</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Download</a></div>

                    </div>
                    <div className="col-lg-3 m-lg-0 my-3 " >
                        <h2 >Quick Links
                        </h2>
                        <div className='bg-muted mb-lg-3 mb-2' style={{ width: '190px', height: '2px', backgroundColor: '#808080' }}></div>

                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> &nbsp;  Company History</a></div>
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

                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> &nbsp;  Indivm Energy Private Limited <br />
                            Kami Road, Sonepat - 131001 <br /> (Opp Sakkar Kui Mandir)</a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> &nbsp; +91 8930232597 </a></div>
                        <div className='my-lg-2' ><a href="#"> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> &nbsp; abc@gmail.com</a></div>


                    </div>
                </div>
            </div>
        </>
    )
}
