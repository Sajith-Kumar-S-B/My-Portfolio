import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaBootstrap} from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
 
} from "react-icons/si";
import { DiCss3, DiMongodb, DiSass } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-up">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
        <div>
            <FaNodeJs className="node" />
            <h5>Nodejs</h5>
          </div>
          <div>
            <FaReact className="react" />
            <h5>React</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <DiMongodb className="mongo" />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiJavascript className="javascript" />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 className="html" />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 className="css" />
            <h5>CSS</h5>
          </div>
          
          
          

          
          <div>
            <SiTailwindcss className="tailwind" />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <FaBootstrap className="bootstrap" />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <DiSass className="sass"/>
            <h5>Sass</h5>
          </div>
          <div>
            <SiMaterialui className="material" />
            <h5>Material Ui</h5>
          </div>
          <div>
            <VscGithub className="github" />
            <h5>Github</h5>
          </div>
          
        </div>
      </div>
    </>
  );
};
