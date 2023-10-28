import "./about.css";
import portfolio from "../../assets/portfolio.png"

function About() {
    return (
        <div className="aboutsection">
            <div className="aboutmetext">
                <span className="aboutme1">
                    Hi, <span className="aboutName">Ritvik</span> here
                </span>
                <p className="aboutme2">
                    I am software engineer.
                </p>
                <button className="resume">resume</button>
            </div>
            <img src={portfolio} className="aboutimg" alt="that's how I look" />
        </div>
    )
}

export default About