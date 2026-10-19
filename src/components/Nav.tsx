import { Routes, Route } from "react-router-dom";
import { pages } from "../routes";
import NavigationLinks from "./NavigationLinks";
import { StyledNav } from "../styles/ResumeStyles";

export default function Nav() {
  return (
    <StyledNav>
      <Routes>
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<NavigationLinks current={page.label} />}
          />
        ))}
      </Routes>
    </StyledNav>
  );
}
