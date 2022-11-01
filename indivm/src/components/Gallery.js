import React from 'react'

export default function Gallery() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    return (
        <div className='bg-light' onLoad={scrollToTop} style={{ paddingTop: '130px' }}>
            <div className='container pb-5'>
                <div className='text-center  fs-1' >Gallery</div>
                <div className=''>
                    <h3 className=''>Recent Projects</h3>
                    <div className='row mb-lg-5 mb-3'>
                        <div className=' col-lg-4 my-2 col-12'>
                            <img className='imgHover' src={require('../img/gallery/Rcent Projects/HMFL/1.png')} alt="" />
                        </div>
                        <div className=' col-lg-4 my-2 col-12'>
                            <img className='imgHover' src={require('../img/gallery/Rcent Projects/HMFL/1.png')} alt="" />
                        </div>
                        <div className=' col-lg-4 my-2 col-12'>
                            <img className='imgHover' src={require('../img/gallery/Rcent Projects/HMFL/1.png')} alt="" />
                        </div>
                        
                        
                    </div>
                    <h3>Highlighted Projects</h3>
                    <div className='row mb-lg-5 mb-3'>
                        <div className='col-lg-4 my-2 col-12'>
                            <img src={require('../img/gallery/1.jpg')} alt="" />
                        </div>
                        <div className='col-lg-4 my-2 col-12'>
                            <img src={require('../img/gallery/1.jpg')} alt="" />
                        </div>
                        <div className='col-lg-4 my-2 col-12'>
                            <img src={require('../img/gallery/1.jpg')} alt="" />
                        </div>
                    </div>
                    <h3>Glympses</h3>
                    <div className='row '>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                        <div className='col-lg-2 my-2 col-12'>
                            <img src={require('../img/gallery/Glympse/1.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* recent projects 
      highlighted projects
      glympsis*/}

        </div>
    )
}
