import React from "react";
import FullScreenSection from "./FullScreenSection";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import './skills.css';


const SkillsSection = () => {
return (
    <FullScreenSection
    isDarkBackground
    backgroundColor="black"
    >
    <Fade left duration={2000}>
    <section className="experience-section">
        <div className="container">
            <div className="section_title center" id="knowledge-section">
                <p>Why Choose Me</p>
                <h2>My Experience</h2>
            </div>
            <div className="experience-items">

                <div className="experience-item">
                    <div className="experience-info">
                        <p>JavaScript</p>
                        <p>90%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "90%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Java</p>
                        <p>80%</p>
                    </div>
                    <div className="progress-line" data-percent="80%">
                        <span style={{width: "80%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Python</p>
                        <p>70%</p>
                    </div>
                    <div className="progress-line" data-percent="70%">
                        <span style={{width: "70%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>React</p>
                        <p>80%</p>
                    </div>
                    <div className="progress-line" data-percent="80%">
                        <span style={{width: "80%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>UI/UX</p>
                        <p>50%</p>
                    </div>
                    <div className="progress-line" data-percent="50%">
                        <span style={{width: "50%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Version Control</p>
                        <p>60%</p>
                    </div>
                    <div className="progress-line" data-percent="60%">
                        <span style={{width: "60%"}}></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fade>

    <Fade top duration={2000}>
    <div className="section_title center">
        <h2>Languages</h2>
    </div>
    </Fade>
    <section className="skillsSection" id="skills">
        <div className="skillsContainer">
            <Flip left>
            <div className="skill">
                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public" 
                alt="JavaScript Logo" className="skillImg"/>
                <p>JavaScript</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" 
                alt="Java Logo" className="skillImg"/>
                <p>Java</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" 
                alt="Python Logo" className="skillImg"/>
                <p>Python</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" 
                alt="CSS Logo" className="skillImg"/>
                <p>CSS</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://seeklogo.com/images/C/c-language-logo-CE0F92E683-seeklogo.com.png" 
                alt="C Logo" className="skillImg"/>
                <p>C</p>
            </div>
            </Flip>
        </div>
    </section>

    <Fade top duration={1500}>
    <div className="section_title center">
        <h2>Tools</h2>
    </div>
    </Fade>
    <section className="skillsSection" id="skills">
        <div className="skillsContainer">
            <Flip left>
            <div className="skill">
                <img src="https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg" 
                alt="React Logo" className="skillImg"/>
                <p>React</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format" 
                alt="Figma Logo" className="skillImg"/>
                <p>Figma</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png" 
                alt="Photoshop Logo" className="skillImg"/>
                <p>Photoshop</p>
            </div>
            </Flip>
            <Flip left>
            <div className="skill">
                <img src="https://www.freecodecamp.org/news/content/images/2022/07/git-github.png" 
                alt="Github Logo" className="skillImg"/>
                <p>Github</p>
            </div>
            </Flip>
        </div>
    </section>
    </FullScreenSection>
)

};

export default SkillsSection;