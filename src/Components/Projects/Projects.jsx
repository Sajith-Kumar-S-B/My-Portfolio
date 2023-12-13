import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiSass
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import candyCrush from '../../assets/FireShot Capture 146 - Candy Saga - candy-crush-game-sajith.netlify.app.png'
import youtubeClone from '../../assets/youtube-clone-react-sajith.netlify.app.png'
import weatherApp from '../../assets/d8f43445-c6df-4fc7-a919-f89cfdf1ae0c.gif'
import budgetApp from '../../assets/FireShot Capture 149 - Expense Tracker - expense-tracker-sajith.netlify.app.png'
import timelineManager from '../../assets/Project Timeline Manager - timeflow-task-manager.netlify.app.png'
import netflixClone from '../../assets/Netflix Clone - 127.0.0.1.png'
import reactQuiz from '../../assets/react-quiz.png'
import hireUp from '../../assets/hreup.gif';

import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
        <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                  
                    src={hireUp}
                    alt="quiz-app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>HireUp</h2>
                <p>
                A comprehensive Job Portal - HireUp built with the MERN stack! This application is designed with both job seekers and recruiters in mind, offering a seamless experience for both. search for jobs and filter results. 
             
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb/>
                  <FaReact />
                 
                  <DiCss3 />
                
                </div>
                <div>
                  <a
                    href="https://store-rockstargames.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/youtube-clone-react.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={reactQuiz}
                    alt="quiz-app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ouiz App</h2>
                <p>
                A Quix app buit with ReactJs. Dynamic rendering of questions and options.Use lifelines, hints. Real-time scoring based on user-selected options. Responsive design with dark and light modes.
             
                </p>
                <div>
                  <SiNodedotjs />
                  <SiTailwindcss/>
                  <FaReact />
                  <SiMaterialui />
                  <DiCss3 />
                  <SiSass/>
                </div>
                <div>
                  <a
                    href="https://store-rockstargames.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/youtube-clone-react.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={youtubeClone}
                    alt="youtube-clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube Clone</h2>
                <p>
                A YouTube clone built with technologies, including Tailwind to create a sleek, modern and responsive user interface. React, ensuring a smooth and interactive user experience. and Rapid API.
             
                </p>
                <div>
                  <SiNodedotjs />
                  <SiTailwindcss/>
                  <FaReact />
                  <SiMaterialui />
                  <DiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    href="https://store-rockstargames.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/youtube-clone-react.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={candyCrush}
                    alt="candy-crush"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Candy Crush Game</h2>
                <p>
                Created a Candy Crush-style game using React, leveraging the power of React Hooks to manage game logic and state.Game mechanics, including candy matching, score tracking, and level progression.

                </p>
                <div>
                 
                  <SiNodedotjs />
                
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/Candy-Crush-react.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img width={'100%'} src={weatherApp} alt="weather" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                Discover the weather conditions in different cities or anywhere around the world.This application leverages the OpenWeatherMap API to deliver up-to-date-weather information.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://weather24-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/weather-app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={budgetApp}
                    alt="expense-tracker"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Expense Tracker</h2>
                <p>
                 A budget app built with React. To Calculate the Expense and income. Thus finding the balance.Also provide the transaction history and edit or delete records.
                </p>
                <div>
                  <SiNodedotjs />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://expense-tracker-sajith.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/Budget-tracker-react.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={netflixClone}
                    alt="netflix-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Netflix Clone</h2>
                <p>
                Netflix Clone that I built from scratch using Tailwind CSS & JavaScript.Creating reusable UI components with predefined Tailwind styles.
                </p>
                <div>
                 
                <SiTailwindcss/>
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                     Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/netflix-clone.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="zoom-out">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={timelineManager}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Timeline Manager</h2>
                <p>
               To manage the project timelines. With a user-friendly interface, the website features are designed to enhance project organization and collaboration.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://timeflow-task-manager.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Live Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sajith-Kumar-S-B/Task-Manager.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
