import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";
import ExperienceCard from "../ExperienceCard";

const experiences = [
  {
    title: "Sudoku Solving with Recursive Backtracking",
    date: "Nov 2025 – Dec 2025",
    position: "Individual Project | Boston, MA",
    items: [
      "Developed a Java Sudoku solver that reads puzzles from text files and returns the first valid solution.",
      "Used recursive backtracking to check row, column, and subgrid constraints.",
      "Designed more than 20 tests for solvable, unsolvable, and edge-case puzzles.",
    ],
  },
  {
    title: "Desktop Pet Application",
    date: "Jul 2023 – Sep 2023",
    position: "Software Developer | Shanghai, China",
    items: [
      "Built an interactive desktop pet using Python, object-oriented programming, and Tkinter.",
      "Added real-time weather information and useful system features.",
      "Designed an approachable interface focused on the user experience.",
    ],
  },
  {
    title: "Brain Tumor Segmentation with U-Net",
    date: "Jun 2022 – Aug 2022",
    position: "Data Analyst | Shanghai, China",
    items: [
      "Trained a U-Net model to segment low-grade glioma using more than 4,000 MRI images.",
      "Compared seven deep-learning models and documented their performance.",
      "Collaborated with a team to set milestones and improve the model through repeated testing.",
    ],
  },
  {
    title: "School Sudoku Club",
    date: "Sep 2021 – May 2023",
    position: "Founder | Shanghai Pinghe Bilingual School",
    items: [
      "Founded the school's first Sudoku club and engaged more than 50 students.",
      "Organized competitions, workshops, and weekly puzzle-solving sessions.",
      "Managed event planning, recruitment, and team-building activities.",
    ],
  },
];

export default function Experience() {
  return (
    <Main>
      <PageHeading title="Experience" subtitle="Work, leadership, and project experience" />
      <div id="experienceList">
        {experiences.map((entry) => (
          <ExperienceCard key={entry.title} title={entry.title} date={entry.date}
            position={entry.position} items={entry.items} />
        ))}
      </div>
    </Main>
  );
}
