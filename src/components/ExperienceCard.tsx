interface ExperienceCardProps {
  title: string;
  date: string;
  position: string;
  items: string[];
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className="experienceCard">
      <div className="experienceHeading">
        <h3>{props.title}</h3>
        <p className="experienceDate">{props.date}</p>
      </div>
      <h4>{props.position}</h4>
      <ul>
        {props.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
