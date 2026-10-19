import { Link } from "react-router-dom";
import { pages } from "../routes";

interface NavigationLinksProps {
  current: string;
}

export default function NavigationLinks(props: NavigationLinksProps) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.path} id={props.current === page.label ? "current" : undefined}>
          <Link to={page.path}> {page.label} </Link>
        </li>
      ))}
    </ul>
  );
}
