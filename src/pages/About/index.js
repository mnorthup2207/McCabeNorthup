import React from "react";
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/style.css';
import Pic from '../../images/portfolio_pic3.jpg';
import PDF from '../../pdf/McCabe_CV.pdf'

const About = () => {
    return (
        <>
            <div className="blurb row">
                <div className="four columns">
                    <img className="portfolioPic" src={Pic} alt="New Zealand" />
                </div>
                <div id="paraEl" className="six columns">
                    <div className="row">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <p>Full Stack Web Developer with refined skills in the MERN Stack. 
                            MongoDB, ExpressJS, ReactJS, and NodeJS. In addition, I am also skilled in MySQL, Sequelize, and Command Line. 
                            I have a wealth of knowledge in version control and collaboration through GitHub. 
                            I have 30+ repositories with more than 500 commits.</p>
                        <span className="icon github">
                            <a target="_blank" href="https://github.com/mnorthup2207">
                                <i className="fab fa-github"></i>
                            </a>
                        </span>
                        <span className="icon linked">
                            <a target="_blank" href="https://www.linkedin.com/in/mccabe-northup-2b76b885/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </span>
                        <span className="icon resume">
                            <a target="_blank" href={PDF}>
                                <i className="fas fa-file-pdf"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;