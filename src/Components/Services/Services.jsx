import React, { useState } from 'react'
import './Services.css'
function Services() {
  const [toggleState,setToggleState] = useState(0)

  const toggleTab = (index)=>{
   setToggleState(index)
  }


  return (
    <div className='services section' id='services' data-aos="zoom-out">
        <h2 className='section__title different'>Services</h2>
        <span className='section__subtitle'>What I Offer</span>
         <div className='services__container grid'>
            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Web Application <br /> Developer</h3>
                </div>
                
              <span className='services__button' onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
               <div className={toggleState === 1? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Web Application Developer</h3>
                <p className="services__modal-description">Providing quality works to clients and companies</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop User friendly interfaces</p>
                  </li>
                  
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Application Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Maintenance and Support</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Front-end Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend-end Development</p>
                  </li>
                </ul>
                </div>
               </div>
            </div>
            <div className="services__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Products <br /> Designer</h3>
                </div>
                
              <span className='services__button'onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
               <div className={toggleState === 2? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Products Designer</h3>
                <p className="services__modal-description">Providing quality works to clients and companies</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop User friendly interfaces</p>
                  </li>
                  
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Application Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Maintenance and Support</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Front-end Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend-end Development</p>
                  </li>
                </ul>
                </div>
               </div>
            </div>
            <div className="services__content">
                <div>
                    <i className='uil uil-brush-alt services__icon'></i>
                    <h3 className='services__title'>Products <br /> Designer</h3>
                </div>
                
              <span className='services__button'onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
               <div className={toggleState === 3? "services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">Products Designer</h3>
                <p className="services__modal-description">Providing quality works to clients and companies</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop User friendly interfaces</p>
                  </li>
                  
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Application Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Maintenance and Support</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Front-end Development</p>
                  </li>
                  <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend-end Development</p>
                  </li>
                </ul>
                </div>
               </div>
            </div>
         </div>
        </div>
  )
}

export default Services