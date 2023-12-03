import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/photomdeds.jpg";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        
        <div className="section" data-aos="fade-right">
          
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Sajith Kumar </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kollam, Kerala (India)
                </span>
                . I have completed my graduation
                from{" "}
                <span className="different">
                  Kerala University, Kerala (KL)
                </span>
                . Then I have done an Internship in full stack development course by{" "}
                <span className="different">Luminar Technolab</span> a software training institute in Kochi, Kerala.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ArrowRightAltIcon />
                </span>
                Orator{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ArrowRightAltIcon />
                </span>
                Multimedia Editor{" "}
              </h4>
              <button
          className="btnResume"
          onClick={() => {
            window.open(
              ""
            );
          }}
        >
          Resume
        </button>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
