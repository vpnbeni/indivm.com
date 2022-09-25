import React from 'react'

export default function About() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <div className='' onLoad={scrollToTop} style={{ backgroundColor: '#ca9d10', paddingTop: '100px' }}>
      <div className='aboutUs container-fluid px-lg-4 p-2  pt-5 bg-white' style={{ width: '60%' }}>
        <h1 className='text-center'>About Us</h1>
        <p className=' fs-5 mx-lg-5 mx-3' style={{ textAlign: 'justify' }}>Indivm Energy Private Limited is an organization with a goal of contributing efforts to come out of dark polluted human lifestyle. Harnessing Renewable Green energy to the humanity is our moto.  So we are experienced professionals focused on producing quality work and making a significant impact. We enjoy applying our career experience and skills to managing projects through creative problem solving and innovative thinking. We possess a strong eye for detail and can thrive independently as well as in a team environment. We are confident we have what it takes to make a significant contribution to any business we join, and are always striving to develop and expand our professional skillset. Want to know more about our qualifications? Read about our journey right here.

          The Company came in to existence in April Month of year 2017.  Now working in PAN India dedicated to Industrial Solar Projects.</p>
        <div className='d-flex mt-lg-5 justify-content-center align-items-center' >
          <img style={{ width: '38%' }} src={require('../img/vijay kumar.jpeg')} alt="" />
        </div>
          <h1 className='text-center' >Vijay Kumar</h1>
          <h2 className='text-center mb-lg-5'>Founder & Managing Director</h2>
      </div>
    </div>
  )
}
