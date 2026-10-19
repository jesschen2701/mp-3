interface ListCardProps {
  title: string;
  items: string[];
  variant: string;
}

export default function ListCard(props: ListCardProps) {
  const entries = (
    <ul>
      {props.items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );

  if (props.variant === "education") {
    return (
      <div className="card">
        <h4>{props.title}</h4>
        {entries}
      </div>
    );
  }

  return (
    <div className="skillCard">
      <h3>{props.title}</h3>
      {entries}
    </div>
  );
}
