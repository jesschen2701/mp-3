import { Link } from "react-router-dom";
import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";

export default function Home() {
  return (
    <Main>
      <PageHeading title="Home" subtitle="A little about me" />
      <div id="mainPart">
        <img src="/profile.JPG" alt="Yile Chen" />
        <div id="wording">
          <h3>Hi, I'm Jess.</h3>
          <p>
            I'm a computer science student at Boston University with a passion for software development and game design.
            I enjoy combining technical problem-solving with creativity, whether I’m building software, designing a game,
            or experimenting with a new idea.
          </p>
          <div className="card">
            <h4>Interests</h4>
            <p>Gaming, art, jewelry collecting, reading, and traveling.</p>
          </div>
          <div className="card">
            <h4>Goals</h4>
            <p>Build meaningful projects, create games I'm proud of, and make a positive impact through technology.</p>
          </div>
          <Link id="contactMe" to="/contact">Contact Me</Link>
        </div>
      </div>
    </Main>
  );
}
