import React, { Component } from 'react';
import './App.css';


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
                    <h2>
                        Welcome to my website!</h2>
                    <p>
                        This is my website.
                    </p>
                </header>

                <div className={"code"} id={"code"}>
                    <header className="code-header">
                        <h2 className={"spacing"}>
                            Code
                        </h2>
                    </header>
                </div>

                <div className={"experience"} id={"experience"}>
                    <header className="experience-header">
                        <h2 className={"spacing"}>
                            Experience
                        </h2>

                        <h3>
                            TripAdvisor
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
                    </header>
                </div>

            </div>
        );
    }
}

export default Website;