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
                <a href="https://drive.google.com/drive/folders/1b6gQIQhLcNnj6hH1c3Z_G1YEOlVhu04F?usp=sharing">
                    <button className="resume">resume</button>
                </a>
            </div>
            <img src={portfolio} className="aboutimg" alt="that's how I look" />
        </div>
    )
}

export default About