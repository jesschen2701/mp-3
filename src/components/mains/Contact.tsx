import { useState } from "react";
import { Main } from "../../styles/ResumeStyles";
import PageHeading from "../PageHeading";

export default function Contact() {
  const [notice, setNotice] = useState("Demo form — please use the email link to contact me.");

  return (
    <Main>
      <PageHeading title="Contact" subtitle="Ways to reach me" />
      <p id="contactIntro">
        I'd love to connect! Whether you have a question,
        want to collaborate, or just want to say hi,
        feel free to reach out.
      </p>
      <div id="contactColumns">
        <div className="contactPanel">
          <h3>Contact Information</h3>
          <div className="contactEntry">
            <h4>Email</h4><p>jessch@bu.edu</p>
          </div>
          <div className="contactEntry">
            <h4>Phone</h4><p>(860) 817-9705</p>
          </div>
          <div className="contactEntry">
            <h4>LinkedIn</h4>
            <p><a href="https://www.linkedin.com/in/yilechen/">View my LinkedIn profile</a></p>
          </div>
          <div className="contactEntry">
            <h4>Location</h4><p>Boston, Massachusetts</p>
          </div>
        </div>
        <div className="contactPanel">
          <h3>Send a Message</h3>
          <form id="contactForm">
            <label htmlFor="contactName">Name</label>
            <input type="text" id="contactName" />
            <label htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail" />
            <label htmlFor="contactMessage">Message</label>
            <textarea id="contactMessage"></textarea>
            <button type="button" onClick={() =>
              setNotice("This demo does not send messages. Please email jessch@bu.edu.")
            }>Send</button>
            <p id="contactNotice">{notice}</p>
          </form>
        </div>
      </div>
      <div id="contactAvailability">
        <h3>Availability</h3>
        <p>I'm interested in internship opportunities,
          software development projects, and game design collaborations.</p>
        <p>Feel free to reach out to discuss ideas or opportunities!</p>
      </div>
    </Main>
  );
}
