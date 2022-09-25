import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function ContactUs() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };
    return (
        <>
            {/* intro */}
            <div className="container-fluid px-lg-5   " style={{ marginTop: '120px', backgroundColor: '#f5f8fa' }} >
                <div className="d-grid mx-lg-5">
                    <div className=' row '>
                        <div className="col-md-5 order-sm-first order-last">
                            <div className="pt-lg-5 mt-lg-4 m-2 ps-lg-3">
                                <h1 className='d-blue ms-lg-5  fw-bolder'>Get In Touch</h1>
                                <p className='ms-lg-5 pt-lg-2  text-muted'>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>

                            </div>
                        </div>
                        <div className="col-md-7 w-lg-100 d-flex justify-content-center align-items-center">
                            <img className='contactUsCoverImg w-50' src={require('../img/Sun energy (1).png')} alt="Sun_energy_panel" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='' onLoad={scrollToTop} style={{ backgroundColor: '#254f4a' }}>
                <div className="container">
                    <div className=' row py-3 d-flex align-items-center justify-content-center'>
                        <div className="col-lg-5 col-12 text-center py-3 bg-white m-3 rounded">
                            <FontAwesomeIcon className='fs-1 m-2' icon={faPhone}></FontAwesomeIcon>
                            <p className='fw-bolder fs-5' >Talk to Sales</p>
                            <p>Interested in Indivm Energy Products? Just pick up the phone to chat with a member of our sales team.</p>
                            <a className='fs-4' target={'_blank'} href='tel:+919518220044'>+91 9518220044</a>
                        </div>
                        <div className="col-lg-5 col-12 text-center py-3 bg-white m-3 rounded">
                            {/* <FontAwesomeIcon className='fs-1 m-2' icon={faWhatsapp}></FontAwesomeIcon> */}
                            <i class="fa-brands fs-1 fw-bolder m-2 fa-whatsapp"></i>
                            <p className='fw-bolder fs-5' >Contact Us on WhatsApp</p>
                            <p>Sometimes you need a little help from your friends. Or a Indivm Support rep.Don't worry we are here for you.</p>
                            <a className='fs-4 ' target={'_blank'} href='https://wa.me/+919518220044'>Whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
