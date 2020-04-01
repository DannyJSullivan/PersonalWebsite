import React, { Component } from 'react';
import './App.css';
// import tripLogo from './triplogo.png';
import tripLogo from './ta_white.png';
import hackathon from './taHackathon.jpg';
import desk from './ta2018.jpg';
import me from './pic.jpg';
// import wpi from './wpi_white.png';
import wpi from './wpi_white2.png';
import gitBlue from './github_blue.png';

class Website extends Component {
    render() {
        return (
            <div className="App">
                <div className="navBar">
                    <h1>Danny Sullivan</h1>
                    <a href={"#contact"}>Contact</a>
                    <a href={"#about"}>About</a>
                    <a href={"#experience"}>Experience</a>
                    <a href={"#code"}>Code</a>
                    <a href={"#home"}>Home</a>
                </div>

                <header className="home-header" id={"home"}>

                    <img className={"profilePhoto"} src={me} alt={"Photo of me, 2020."} height={"300"} width={"300"}></img>

                    <h2>
                        Danny Sullivan
                    </h2>
                    <h3>
                        Worcester Polytechnic Institute, 2020
                    </h3>
                    <h4>
                        Bachelor's of Science, Computer Science
                    </h4>

                    <div className={"homePageText"}>
                        <p>
                            <a href={"#code"}>See some examples of my code.</a>
                        </p>
                        <p>
                            <a href={"#experience"}>Check out my background and industry experience.</a>
                        </p>
                        <p>
                            <a href={"#about"}>Learn about me.</a>
                        </p>
                        <p>
                            <a href={"#contact"}>Contact me!</a>
                        </p>
                    </div>

                </header>

                <div className={"code"} id={"code"}>
                    <header className="code-header">
                        <h2 className={"spacing"}>
                            Coding Projects
                        </h2>
                        <h5>
                            <img id={"githubLogo"} src={gitBlue} alt={"GitHub logo"} ></img>
                            Brigham and Women's Hospital Kiosk
                        </h5>
                        <p id={"codeText"}>
                            My sophomore year, I took a software engineering course, which was by far the
                            most beneficial course I have ever taken. We worked in teams of ten to compete
                            weekly and see who could make the best application. We applied agile development
                            methodologies and software design patterns in Java to create an indoor pathfinding
                            application, map builder, and integrated service modules for Brigham & Women's main
                            hospital campus. To create this application, we gathered software requirements through
                            surveys, interviews, and brainstorming, as well as created user stories, scenarios,
                            and storyboards.
                        </p>
                        <p id={"codeText"}>
                            In my group, I worked as both a software engineer and test engineer. I was responsible
                            for creating user classes, the technology ticket API, integrating other team's APIs,
                            kiosk timeout feature, and the live clock. I also assisted in creating the UI, login
                            handler, pathfinding, node and edge translation, and Epic integration. As a test engineer,
                            I wrote the unit tests for the UI, database, and other functionality through the app.
                        </p>
                    </header>
                </div>

                <div className={"experience"} id={"experience"}>
                    <header className="experience-header">
                        <h2 className={"spacing"}>
                            Education & Experience
                        </h2>
                        <h3>
                            {/*Worcester Polytechnic Institute*/}
                            <img src={wpi} alt={"WPI Logo"} height={"74.52"} width={"217.35"}></img>
                        </h3>
                        <p id={"text"}>
                            Bachelor's of Science, Computer Science
                        </p>
                        <p id={"iText"}>
                            August 2016 - May 2020
                        </p>
                        <p id={"text"}>
                            Over my four years at WPI, I took 19 courses in computer science. Some of these courses are:
                            <div className={"row"}>
                                <div className={"ulCol"}>
                                    <ul>
                                        Object-Oriented Design Concepts (Java)
                                    </ul>
                                    <ul>
                                        Systems Programming Concepts (C/C++)
                                    </ul>
                                    <ul>
                                        Operating Systems (C)
                                    </ul>
                                    <ul>
                                        Software Engineering (Java)
                                    </ul>
                                    <ul>
                                        Webware (Javascript, HTML, CSS)
                                    </ul>
                                    <ul>
                                        Mobile and Ubiquitous Computing (Java, Android)
                                    </ul>
                                </div>
                                <div className={"ulCol"}>
                                    <ul>
                                        Algorithms (Python)
                                    </ul>
                                    <ul>
                                        Network Security (Python)
                                    </ul>
                                    <ul>
                                        Cryptography and Communication Security
                                    </ul>
                                    <ul>
                                        Database Systems I & II (SQL, Oracle)
                                    </ul>
                                    <ul>
                                        Artificial Intelligence (Python)
                                    </ul>
                                    <ul>
                                        Machine Learning (Python, R)
                                    </ul>
                                </div>
                            </div>
                        </p>

                        <h3>
                            {/*TripAdvisor*/}
                            <img src={tripLogo} alt={"TripAdvisor Logo"} height={"75"} width={"400"}></img>
                        </h3>
                        <p id={"text"}>
                            Software Engineering Intern
                        </p>
                        <p id={"iText"}>
                            June 2018 - August 2018
                        </p>
                        <p id={"iText"}>
                            June 2019 - August 2019
                        </p>
                        <p id={"text"}>
                            As a software engineering intern for the Enterprise Business Systems team, I worked in various parts of the codebase, such as payment processing, finance, and booking. I worked directly alongside the team on several projects, as well as a few individual projects. I was able to complete many bug fixes for the team, as well as create new scripts, tests, and functionalities for new and existing code.
                        </p>

                        {/*<div className={"row"}>*/}
                        {/*    <div className={"column"}>*/}
                        {/*        <img src={desk} alt={"Me at my desk, 2018"} height={"226.5"} width={"479"}></img>*/}
                        {/*    </div>*/}
                        {/*    <div className={"column"}>*/}
                        {/*        <img src={hackathon} alt={"TripAdvisor Hackathon"} height={"416"} width={"312"}></img>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </header>
                </div>

                <div className={"about"} id={"about"}>
                    <header className="about-header">
                        <h2 className={"spacing"}>
                            About
                        </h2>
                    </header>
                </div>

                <div className={"contact"} id={"contact"}>
                    <header className="contact-header">
                        <h2 className={"spacing"}>
                            Contact
                        </h2>

                        <div className="contactForm">
                            <form action={"action_page.php"}>
                                <label for={"name"}>Name</label>
                                <br></br>
                                <input className={"contactBox"} type={"text"} id={"name"} placeholder={"Your Name"}></input>
                                <br></br>
                                <label for={"email"}>Email</label>
                                <br></br>
                                <input className={"contactBox"} type={"text"} id={"email"} placeholder={"Your e-mail"}></input>
                                <br></br>
                                <label for={"subject"}>Subject</label>
                                <br></br>
                                <input className={"contactBox"} type={"text"} id={"subject"} placeholder={"Subject"}></input>
                                <br></br>
                                <label for={"message"}>Message</label>
                                <br></br>
                                <textarea className={"messageBox"} type={"text"} id={"message"} placeholder={"Write your message..."}></textarea>
                                <br></br>
                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>

                    </header>
                </div>

            </div>
        );
    }
}

export default Website;
