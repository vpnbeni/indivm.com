import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos-animations/dist/animations.min.css';
import 'aos-animations/dist/animations.min.js';
import NewCarousel from './NewCarousel';
import { Link, link } from 'react-router-dom';

export default function Home() {
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
      <div className='homeBody'></div>
      {/* NewCarousel */}
      <NewCarousel />
      {/* we are commited ! */}
      <div className='container-fluid p-lg-5 p-2 text-center bg-light'>
        <h2 className='fc-blue' >We are Committed!</h2>
        <div className="row " >
          <div className="col-lg-4 col-12">
            <img src={require('../img/solar panel.png')} alt="" />
            <h4>Best Solar Panels</h4>
          </div>
          <div className="col-lg-4 col-12">
            <img src={require('../img/handshake.png')} alt="" />
            <h4>Most Trusted Brand</h4>
          </div>
          <div className="col-lg-4 col-12">
            <img src={require('../img/group.png')} alt="" style={{objectFit:'cover'}}/>
            <h4>In house R&D team</h4>
          </div>


        </div>
      </div>
      {/* About Us */}
      <div className="container my-lg-5 my-3">
        <div className=" row m-0 mt-lg-5 p-0" >
          <div className="col-lg-6 my-5 col-12  p-lg-5">
            <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >About Us</h1>
            <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
            <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">Indivm Solar is a globally renowned Indian supplier of high-performance solar panels. Capitalizing on its strength in solar panel designing, it is committed to provide panels with unparalleled efficiency, and reliability to enable customers to maximize the returns on their PV projects. With its leading industry experience, continuous effort on R&D, and customer-oriented service Indivm Solar is your most trustworthy long-term partner</p>
            <Link className='btnHover mx-2 mx-lg-5 border-0' to='/about'>READ MORE</Link>

          </div>
          <div className="animateImgBg col-lg-6 col-12 ">
            <img className='p-2' src={require('../img/home1N.png')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
            <div className='ms-5' style={{ backgroundColor: '#404657' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
          </div>
        </div>

      </div>
      {/* Products */}
      <div className="container my-lg-5 my-3">
        <div className=" row m-0 mt-lg-5 p-0" >
          <div className="order-sm-first order-last animateImgBg col-lg-6 col-12 ">
            <img className='p-2 ms-2' src={require('../img/productN-1.png')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
            <div style={{ backgroundColor: '#faa61a' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
          </div>
          <div className="col-lg-6 my-5 col-12  p-lg-5">
            <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >Products</h1>
            <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
            <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">As one of the world’s best solar panel manufacturer, Indivm Solar offers range of solar panels which deliver above average energy yields. Indivm Solar panels are used widely across solar installations for utility-scale power plants, businesses and rooftops</p>
            <Link to='/solarmodule' className='btnHover mx-2 mx-lg-5 border-0'>DISCOVER MORE</Link>
          </div>

        </div>

      </div>
      {/* Why Choose Indivm Solar */}
      <div className="container my-lg-5 my-3">
        <div className=" row m-0 mt-lg-5 p-0" >
          <div className="col-lg-6 my-5 col-12  p-lg-5">
            <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >Why Choose Indivm Solar</h1>
            <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
            <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">Indivm Solar’s blend of product quality, innovative features, company reliability and commitment to sustainable future makes us the ideal brand for your solar project. Indivm Solar believes in continuously investing in development of new Solar Technologies and advanced Photovoltaic Systems that gives our products a leading edge</p>
            <button className='btnHover mx-2 mx-lg-5 border-0'>LEARN MORE</button>
          </div>
          <div className="animateImgBg col-lg-6 col-12 ">
            <img className='p-2' src={require('../img/home2.png')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
            <div className='ms-5' style={{ backgroundColor: '#446aa6' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
          </div>
        </div>

      </div>
      {/* Projects & Services */}
      <div className="container my-lg-5 my-3">
        <div className=" row m-0 mt-lg-5 p-0" >
          <div className="order-sm-first order-last animateImgBg col-lg-6 col-12 ">
            <img className='p-2 ms-2' src={require('../img/sp-install.png')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
            <div style={{ backgroundColor: '#faa61a' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
          </div>
          <div className="col-lg-6 my-5 col-12  p-lg-5">
            <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >Projects &#38; Services</h1>
            <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
            <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              Indivm Solar is a leading player in distributed and utility scale solar photovoltaic market. With a proven track record in Development, EPC, Operations and Maintenance Services the company provides 360o turnkey solutions customised to customer's needs</p>
            <button className='btnHover mx-2 mx-lg-5 border-0'>TAKE ME THERE</button>
          </div>

        </div>

      </div>
      {/* Solar Explained */}
      <div className="container my-lg-5 my-3">
        <div className=" row m-0 mt-lg-5 p-0" >
          <div className="col-lg-6 my-5 col-12  p-lg-5">
            <h1 data-aos="fade-in" data-aos-offset="200" className='fc-blue mx-2 mx-lg-5 mt-lg-5' >Solar Explained</h1>
            <h1 data-aos="fade-right" data-aos-offset="200" className='mx-2 mx-lg-5 m-0' style={{ height: '2px', width: '50%', backgroundColor: '#045491', color: 'white' }}></h1>
            <p className='p-lg-5  p-2 text-muted' style={{ textAlign: 'justify' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">Why Solar? Because it’s the best solution, both from an economic as well as environmental aspect. Know how Solar works, what goes in the making of the solar panels and the advantages of Solar Energy.</p>
            <button className='btnHover mx-2 mx-lg-5 border-0'>LET'S GO</button>
          </div>
          <div className="animateImgBg col-lg-6 col-12 ">
            <img className='p-2' src={require('../img/5.png')} data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="200" />
            <div style={{ backgroundColor: '#1a3165', marginLeft: '65px' }} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ></div>
          </div>
        </div>

      </div>
    </>

  )
}
