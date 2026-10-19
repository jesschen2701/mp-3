
import styled from "styled-components";

export const colors = {
  canvas: "#EEF3F7",
  navy: "#172033",
  border: "#D7E0EB",
  lightBlue: "#C9DCF2",
  active: "#347FDB",
  blue: "#1764C5",
  heading: "#142F50",
  text: "#414B60",
  muted: "#61708D",
  card: "#FBFCFE",
  button: "#2877D4",
};

export const Canvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.canvas};

  &, & * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Rosarivo", cursive;
    font-weight: 300;
  }
`;

export const PageWrapper = styled.div`
  background-color: ${colors.navy};
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
  border: ${colors.border} solid 3px;
`;

export const ContentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const StyledHeader = styled.header`
  color: #FFFFFF;

  h1 {
    padding: 3% 3% 1%;
    font: 700 calc(24px + 1.5vw) "Cinzel Decorative", serif;
  }

  p {
    padding: 0 3% 2%;
    color: ${colors.lightBlue};
    font-size: calc(14px + 0.5vw);
  }

  @media screen and (max-width: 750px) {
    text-align: center;
    h1 { font-size: calc(14px + 2vw); }
    p { font-size: calc(10px + 1vw); }
  }
`;

export const StyledNav = styled.nav`
  width: 20%;

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    border: none;
    text-align: center;
    padding: 3vh 1%;
  }

  #current {
    color: #FFFFFF;
    background-color: ${colors.active};
  }

  a {
    text-decoration: none;
    font-size: calc(14px + 0.45vw);
    color: ${colors.lightBlue};
  }

  #current a {
    color: #FFFFFF;
    font-weight: 500;
  }

  @media screen and (max-width: 750px) {
    width: 100%;

    ul {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    li { padding: 2%; }
    a { font-size: calc(9px + 0.8vw); }
  }
`;

export const StyledFooter = styled.footer`
  font-size: calc(13px + 0.35vw);
  background-color: #F1F4F8;
  color: #536581;
  padding: 0.5vw;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: calc(10px + 0.35vw);
  }
`;

export const Main = styled.main`
  width: 80%;
  height: auto;
  background-color: #FFFFFF;
  padding-bottom: 2%;

  & * { margin: 2%; }

  h2 {
    font: 900 calc(28px + 2vw) "Cinzel Decorative", serif;
    color: ${colors.heading};
    margin: 3% 3% 0.5%;
  }

  h5 {
    font: 400 calc(16px + 0.7vw) "Jim Nightshade", cursive;
    color: ${colors.muted};
    margin: 0 3.5% 2%;
  }

  /* Home */

  #mainPart {
    display: flex;
    flex-direction: row;
    margin-top: 0;
  }

  img {
    max-width: 100%;
    width: 42%;
    height: auto;
    object-fit: contain;
  }

  #wording {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  #wording h3,
  #educationWording h3,
  .skillCard h3 {
    font-size: calc(18px + 0.8vw);
    font-weight: 700;
    color: ${colors.blue};
  }

  #wording h3 {
    font-family: "Almendra", serif;
    font-size: calc(22px + 1.5vw);
  }

  #wording h4,
  #cardsEducation h4,
  .experienceCard h4,
  .projectCard h4,
  #calculator h4 {
    font-size: calc(14px + 0.5vw);
    font-weight: 700;
    color: ${colors.heading};
  }

  #wording p,
  #educationWording p,
  .experienceCard li,
  .projectCard p,
  .skillCard li,
  #calculator p,
  #calculator label,
  #calculator input,
  #calculator button {
    font-size: calc(13px + 0.35vw);
    color: ${colors.text};
  }

  /* Shared card styling */

  .card,
  .experienceCard,
  .projectCard,
  .skillCard,
  #calculator,
  #educationIntro {
    background-color: ${colors.card};
    border: ${colors.border} solid 2px;
    border-radius: 5px;
  }

  .card {
    text-align: center;
    width: 80%;
    margin: calc(12px + 0.3vw) auto;
  }

  .card h4 {
    text-align: center;
  }

  #contactMe {
    width: 30%;
    height: auto;
    font-size: calc(14px + 0.4vw);
    font-weight: 400;
    color: #FFFFFF;
    background-color: ${colors.button};
    border-radius: 5px;
    border: ${colors.button} solid 2px;
    display: block;
    padding: calc(6px + 0.3vw);
    margin: calc(14px + 0.4vw) auto;
    text-align: center;
    text-decoration: none;
  }

  /* Education */

  #educationIntro {
    width: 90%;
    margin: 2% auto;
    text-align: center;
    padding: 1%;
  }

  #buIMG {
    display: block;
    width: 94%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin: 1% auto;
  }

  #educationWording {
    width: 90%;
    margin: 1% auto;
  }

  #cardsEducation {
    display: flex;
    flex-direction: row;
    margin: 1%;
  }

  #cardsEducation .card {
    width: 31%;
    margin: 1% auto;
    padding: calc(8px + 0.3vw) 0;
  }

  #cardsEducation ul,
  .experienceCard ul,
  .skillCard ul {
    padding-left: 8%;
  }

  #cardsEducation li,
  .experienceCard li,
  .skillCard li {
    text-align: left;
    margin: 2%;
  }

  /* Experience */

  #experienceList {
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: 2% auto;
  }

  .experienceCard {
    width: 100%;
    margin: 0 0 2%;
    padding: 2%;
    text-align: left;
  }

  .experienceHeading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
  }

  .experienceHeading h3 {
    width: 70%;
    margin: 0;
    color: ${colors.blue};
    font-size: calc(17px + 0.7vw);
    font-weight: 700;
  }

  .experienceHeading .experienceDate {
    width: 27%;
    margin: 0;
    text-align: right;
    color: ${colors.muted};
    font-size: calc(11px + 0.4vw);
    font-weight: 500;
  }

  .experienceCard h4 {
    margin: 2% 0;
    color: ${colors.muted};
    font-size: calc(12px + 0.35vw);
    font-weight: 400;
  }

  .experienceCard ul {
    margin: 1% 0;
    padding-left: calc(18px + 0.5vw);
  }

  .experienceCard li {
    margin: 1% 0;
    color: ${colors.text};
    font-size: calc(13px + 0.35vw);
  }

  /* Projects */

  #projectList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 94%;
    margin: 2% auto;
  }

  .projectCard {
    width: 32%;
    margin: 0;
    padding: 1.5%;
    text-align: left;
  }

  .projectPreview img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: contain;
    border-radius: 5px;
  }

  .projectCard h3 {
    margin: 3% 0;
    color: ${colors.heading};
    font-size: calc(16px + 0.5vw);
    font-weight: 700;
  }

  .projectCard h4 {
    margin: 3% 0;
    color: ${colors.muted};
    font-size: calc(11px + 0.3vw);
    font-weight: 500;
  }

  .projectCard p {
    margin: 4% 0;
    color: ${colors.text};
    font-size: calc(13px + 0.3vw);
  }

  /* Calculator */

  #calculator {
    width: 94%;
    margin: 2% auto;
    padding: 2%;
    text-align: left;
    background-color: #F3F6FB;
  }

  #calculator h3 {
    margin: 0 0 1%;
    color: ${colors.heading};
    font-size: calc(19px + 0.8vw);
    font-weight: 700;
  }

  #calculator p {
    margin: 1% 0 2%;
  }

  #calculatorRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2% 0 0;
  }

  #calculatorRow .numberField {
    width: 20%;
    margin: 0;
  }

  #operationField {
    width: 40%;
    margin: 0;
  }

  #resultField {
    width: 14%;
    margin: 0;
  }

  #calculatorRow label,
  #calculatorRow h4 {
    display: block;
    margin: 0 0 calc(8px + 0.2vw);
    color: ${colors.heading};
    font-size: calc(11px + 0.3vw);
    font-weight: 700;
  }

  #calculatorRow input {
    width: 100%;
    height: calc(34px + 0.5vw);
    margin: 0;
    padding: 4%;
    border: 2px solid #C8D5E4;
    border-radius: 5px;
    background-color: #FFFFFF;
  }

  #calculatorButtons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
  }

  #calculatorButtons button {
    width: 15%;
    height: calc(34px + 0.5vw);
    margin: 0 0 2%;
    padding: 0;
    font-size: calc(9px + 0.25vw);
    color: #FFFFFF;
    background-color: ${colors.button};
    border: 2px solid ${colors.button};
    border-radius: 5px;
  }

  #resultField #result {
    width: 100%;
    min-height: calc(34px + 0.5vw);
    margin: 0;
    padding: calc(6px + 0.2vw);
    background-color: #E8EDF4;
    border: 2px solid #C8D5E4;
    border-radius: 5px;
  }

  #resultField #result.negative {
    color: red;
  }

  /* Skills */

  #skillsList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1%;
  }

  .skillCard {
    width: 44%;
    padding: 1%;
  }

  /* Contact */

  #contactIntro {
    width: 94%;
    margin: 2% auto;
    text-align: left;
    color: ${colors.text};
    font-size: calc(13px + 0.35vw);
  }

  #contactColumns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 94%;
    margin: 2% auto;
  }

  .contactPanel {
    width: 49%;
    margin: 0;
    padding: 2%;
    text-align: left;
    background-color: ${colors.card};
    border: 2px solid ${colors.border};
    border-radius: 5px;
  }

  .contactPanel h3,
  #contactAvailability h3 {
    margin: 0 0 calc(12px + 0.4vw);
    color: ${colors.heading};
    font-size: calc(18px + 0.6vw);
    font-weight: 700;
  }

  .contactEntry {
    margin: 0;
    padding: calc(10px + 0.5vw) 0;
    border-bottom: 1px solid ${colors.border};
  }

  .contactEntry h4 {
    margin: 0 0 calc(4px + 0.1vw);
    color: ${colors.heading};
    font-size: calc(13px + 0.35vw);
    font-weight: 700;
  }

  .contactEntry p {
    margin: 0;
    color: ${colors.text};
    font-size: calc(13px + 0.3vw);
  }

  .contactEntry a {
    margin: 0;
    color: ${colors.blue};
    text-decoration: none;
  }

  #contactForm {
    margin: 0;
  }

  #contactForm label {
    display: block;
    margin: calc(10px + 0.3vw) 0 calc(5px + 0.1vw);
    color: ${colors.heading};
    font-size: calc(13px + 0.3vw);
    font-weight: 700;
  }

  #contactForm input,
  #contactForm textarea {
    display: block;
    width: 100%;
    margin: 0;
    padding: calc(7px + 0.2vw);
    color: ${colors.text};
    background-color: #FFFFFF;
    border: 2px solid #C8D5E4;
    border-radius: 5px;
    font-size: calc(13px + 0.3vw);
  }

  #contactForm textarea {
    height: calc(80px + 2vw);
  }

  #contactForm button {
    margin: calc(12px + 0.3vw) 0 0;
    padding: calc(7px + 0.2vw) calc(22px + 1vw);
    color: #FFFFFF;
    background-color: ${colors.button};
    border: 2px solid ${colors.button};
    border-radius: 5px;
    font-size: calc(13px + 0.3vw);
    font-weight: 400;
  }

  #contactNotice {
    margin: calc(10px + 0.2vw) 0 0;
    color: ${colors.muted};
    font-size: calc(11px + 0.2vw);
  }

  #contactAvailability {
    width: 94%;
    margin: 2% auto;
    padding: 2%;
    text-align: left;
    background-color: ${colors.card};
    border: 2px solid ${colors.border};
    border-radius: 5px;
  }

  #contactAvailability p {
    margin: 1% 0;
    color: ${colors.text};
    font-size: calc(13px + 0.3vw);
  }

  /* Screens <= 1000px */

  @media screen and (max-width: 1000px) {
    #mainPart,
    #cardsEducation,
    #projectList {
      flex-direction: column;
    }

    img {
      width: 55%;
      margin: 2% auto;
    }

    #wording {
      width: 92%;
      margin: 1% auto;
    }

    #cardsEducation .card,
    .skillCard {
      width: 90%;
      margin: 2% auto;
    }

    .projectCard {
      width: 100%;
      margin: 0 0 3%;
      padding: 3%;
    }

    .projectPreview {
      height: calc(120px + 8vw);
    }

    #calculatorRow {
      flex-wrap: wrap;
    }

    #calculatorRow .numberField {
      width: 48%;
      margin: 0 0 4%;
    }

    #operationField {
      width: 72%;
    }

    #resultField {
      width: 24%;
    }

    #contactColumns {
      flex-direction: column;
    }

    .contactPanel {
      width: 100%;
      margin: 0 0 3%;
      padding: 4%;
    }

    #contactAvailability {
      padding: 4%;
    }
  }

  /* Screens <= 750px */

  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    text-align: center;

    h2 {
      font-size: calc(20px + 2vw);
    }

    h5 {
      font-size: calc(14px + 0.7vw);
      margin: 0 auto 2%;
    }

    #mainPart {
      margin: 0;
    }

    img {
      display: block;
      width: 70%;
      height: auto;
      margin: 2% auto;
    }

    #wording {
      width: 95%;
      margin: 0 auto;
    }

    #wording p {
      margin: 1% auto;
    }

    .card {
      margin: 2% auto;
    }

    #contactMe {
      width: 35%;
      margin: calc(14px + 0.4vw) auto;
    }

    #calculatorButtons button {
      width: 26%;
      padding: 2%;
    }
  }
`;
