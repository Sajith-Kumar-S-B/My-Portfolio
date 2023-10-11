import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <span className="section__subtitle">Contact me</span>
        <div className="contact__container grid">
          <div className="contact__content">
            <h3 className="contact_title">Connect with me</h3>
            <div className="contact__info">
              <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">sajithkumarsb1@gmail.com</span>
              <a href="mailto:sajithkumarsb1@gmail.com."   target="_blank"
              rel="noreferrer" className="contact__button"> write to me {' '} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
      
              </div>
              <div className="contact__card">
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+99-9074554332</span>

              <a href="https://wa.me/9074554332" className="contact__button"> write to me {" "} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
      
              </div>
              <div className="contact__card">
              <i className='bx bxl-linkedin-square contact__card-icon'></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Sajith</span>

              <a href="https://www.linkedin.com/in/sajith-kumar-s-b-4b213b27b/" className="contact__button"> write to me {" "} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
      
              </div>
            </div>
          </div>
          <div className="contact__content">
            <h3 className="contact_title">Write about my work</h3>
            <div className="contact__form">
            <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">Name</label>
                <input type="email" name="text" className="contact__form-input" placeholder="Enter your Name" />
              </div>
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">Name</label>
                <input type="email" name="email" className="contact__form-input" placeholder="Insert your Email" />
              </div>
            </div>
            <div className="contact__form">
              <div className="contact__form-div contact__form-area">
                <label htmlFor="" className="contact__form-tag">Feedback</label>
               <textarea name="project" id="" cols="30" rows="10" className="contact__form-input"
               placeholder="Enter your comment"></textarea>

              </div>
              <button className="button button--flex">Send Message<i class='bx bxs-send bx-tada' ></i></button>
            </div>
          </div>
        </div>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:sajithkumarsb1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+918668613593" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>sajithkumarsb1@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91 9074554332</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
