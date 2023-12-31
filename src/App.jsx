import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';


function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}

export default App