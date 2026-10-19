interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <>
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
    </>
  );
}
