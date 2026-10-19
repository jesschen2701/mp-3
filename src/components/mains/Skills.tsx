import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";
import ListCard from "../ListCard";

const groups = [
  { title: "Programming Languages", items: ["Python", "C++", "Java", "HTML, CSS, and JavaScript"] },
  { title: "Data Analysis and Modeling", items: [
    "Exploratory Data Analysis", "Statistical Inference", "Hypothesis Testing",
    "Regression and Time Series Analysis",
  ] },
  { title: "Machine Learning", items: [
    "Deep Learning", "CNN, RNN, and U-Net", "Model Evaluation and Optimization",
  ] },
  { title: "Tools and Software", items: [
    "Jupyter, PyCharm, and Spyder", "Matplotlib, Seaborn, and Tableau",
    "Git and Excel", "Adobe Photoshop and Microsoft Office",
  ] },
];

export default function Skills() {
  return (
    <Main>
      <PageHeading title="Skills" subtitle="Programming, tools, and technologies" />
      <div id="skillsList">
        {groups.map((group) => (
          <ListCard key={group.title} variant="skills" title={group.title} items={group.items} />
        ))}
      </div>
    </Main>
  );
}
