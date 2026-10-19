import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experience from "./components/mains/Experience";
import Projects from "./components/mains/Projects";
import Skills from "./components/mains/Skills";
import Contact from "./components/mains/Contact";

export const pages = [
    { path: "/", label: "Home", element: <Home /> },
    { path: "/education", label: "Education", element: <Education /> },
    { path: "/experience", label: "Experience", element: <Experience /> },
    { path: "/projects", label: "Projects", element: <Projects /> },
    { path: "/skills", label: "Skills", element: <Skills /> },
    { path: "/contact", label: "Contact", element: <Contact /> },
];