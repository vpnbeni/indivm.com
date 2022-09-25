import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos-animations/dist/animations.min.css';
import 'aos-animations/dist/animations.min.js';
export default function JaySolar() {
    AOS.init({
        duration: 1200,
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    return (

        <>
            {/* <img style={{width:'inherit',objectFit:'cover'}} src={require('../img/3d-house-with-solar-pannels.png')} alt="" /> */}
            <div className='solarPV m-0 p-0 ' >
                <div className='soalrPVHead p-lg-5 px-3  m-0  '>
                    <p className=''  >
                        Solar Water Heater
                    </p>
                </div>
            </div>
            <div onLoad={scrollToTop} className=" fs-4 py-3 text-center bg-light" style={{ color: '#ca9d10' }}>We are authorised Distributors for most efficient breed of Solar Water Heater by name of <a href='https://www.jaysolar.net/solar-water-heater-tank.html'> <img className='mx-2' src={require('../img/jay-solar-logo.jpg')} alt="JaySolar" target="_blank" /></a></div>

            {/* The Main Attractions */}
            <div className="container my-lg-5 my-3">
                <div className=" row m-0 mt-lg-5 p-0" >
                    <div className="col-lg-6 my-5 col-12  p-lg-5">
                        <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >The Main Attractions</h1>
                        <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
                        <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify', fontSize: '20px' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"><ul>
                            <li>High Efficient</li>
                            <li>Compact Robust Design</li>
                            <li>Latest and Updated Technology</li>
                            <li>Full Robotic Manufacturing</li>
                        </ul></p>
                        <button className='btnHover mx-2 mx-lg-5 border-0'>READ MORE</button>
                    </div>
                    <div className="animateImgBg col-lg-6 col-12 ">
                        <img className='p-2' src={require('../img/etc-type-solar-water-heater.webp')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
                        <div className='ms-5' style={{ backgroundColor: '#404657' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
                    </div>
                </div>

            </div>
        </>
    )
}
