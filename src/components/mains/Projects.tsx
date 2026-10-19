import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";
import ProjectCard from "../ProjectCard";
import Calc from "../Calc";

const projects = [
  {
    title: "MedTrack",
    technologies: "React Native, Expo, Firebase",
    previewId: "medtrackPreview",
    image: "/medtrack.png",
    imageAlt: "MedTrack medication identification preview",
    paragraphs: [
      "A mobile app for medication search, image-based identification, allergy records and alerts, and nearby pharmacy search.",
      "I implemented the core features, integrated authentication, and tested the mobile prototype.",
    ],
  },
  {
    title: "Desktop Pet",
    technologies: "Python and Tkinter",
    previewId: "petPreview",
    image: "/deskpet.jpg",
    imageAlt: "Pixel-art cat poses for deskpet cat",
    paragraphs: [
      "An interactive desktop companion with weather information and useful system features.",
      "I built the application using object-oriented programming and designed an approachable interface.",
    ],
  },
  {
    title: "Moonlit Maze",
    technologies: "Python and Pygame",
    previewId: "gamePreview",
    image: "/moonlit-maze.png",
    imageAlt: "Moonlit maze game preview",
    paragraphs: [
      "A 2D puzzle game where players guide a lost cat through moonlit rooms, push boxes onto switches, and unlock the exit.",
      "I designed the levels and implemented movement, collision detection, doors, and level restarting.",
    ],
  },
];

export default function Projects() {
  return (
    <Main>
      <PageHeading title="Projects" subtitle="Selected class and personal projects" />
      <div id="projectList">
        {projects.map((project) => (
          <ProjectCard key={project.title} title={project.title}
            technologies={project.technologies} previewId={project.previewId}
            image={project.image} imageAlt={project.imageAlt} paragraphs={project.paragraphs} />
        ))}
      </div>
      <Calc />
    </Main>
  );
}
