interface ProjectCardProps {
  title: string;
  technologies: string;
  image: string;
  imageAlt: string;
  previewId: string;
  paragraphs: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="projectCard">
      <div className="projectPreview" id={props.previewId}>
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <h3>{props.title}</h3>
      <h4>{props.technologies}</h4>
      {props.paragraphs.map((text) => <p key={text}>{text}</p>)}
    </div>
  );
}
