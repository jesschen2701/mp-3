import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";
import ListCard from "../ListCard";

const groups = [
  {
    title: "Relevant Coursework",
    items: [
      "Data Structures", "Computer Systems", "Database Systems", "Operating Systems",
      "Artificial Intelligence", "Human-Computer Interaction", "Software Engineering",
      "Discrete Mathematics", "Algorithms",
    ],
  },
  {
    title: "Academic Interests",
    items: ["Software development", "Game development", "Data Analysis"],
  },
  {
    title: "Highlights",
    items: [
      "Dean's list (multiple semesters)", "Maintained a 3.93 GPA",
      "Completed challenging CS coursework", "Actively exploring interdisciplinary opportunities",
      "Committed to continuous learning and growth",
    ],
  },
];

export default function Education() {
  return (
    <Main>
      <PageHeading title="Education" subtitle="Academic background" />
      <div id="educationIntro">
        <img id="buIMG" src="/bu.png" alt="Aerial view of the Boston University campus" />
        <div id="educationWording">
          <h3>Boston University</h3>
          <p>B.A. in Computer Science</p>
          <p>Expected Graduation: May 2028</p>
          <p>GPA: 3.93 / 4.00</p>
        </div>
      </div>
      <div id="cardsEducation">
        {groups.map((group) => (
          <ListCard key={group.title} variant="education" title={group.title} items={group.items} />
        ))}
      </div>
    </Main>
  );
}
