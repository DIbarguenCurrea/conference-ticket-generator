import "./App.css";
import FormDesktop from "./components/formGeneratorDesktop/FormDesktop";
import LogoMark from "../assets/images/logo-mark.svg";
import PatternCircle1 from "../assets/images/pattern-circle.svg";
import PatternCircle2 from "../assets/images/pattern-circle.svg";
import PatternLines from "../assets/images/pattern-lines.svg";
import PatternSquigglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import PatternSquigglyLineBottom from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import { GithubOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <img src={LogoMark} />
          <h1>Ticket Generator</h1>
          <div className="header-github">
            <a
              href="https://github.com/DIbarguenCurrea/conference-ticket-generator/tree/main/conference-ticket-generator"
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
        <div className="content">
          <h2>
            You can generate your entrance ticket to your favorite place here!
          </h2>
          <p>Choose the type of ticket and fill out the form to generate it.</p>
        </div>

        <FormDesktop />

        <img src={PatternCircle1} className="svg-circle1" />
        <img src={PatternCircle2} className="svg-circle2" />
        <img src={PatternLines} className="svg-lines" />
        <img src={PatternSquigglyLineTop} className="svg-SquigglyLineTop" />
        <img
          src={PatternSquigglyLineBottom}
          className="svg-SquigglyLineBottom"
        />
      </div>
    </>
  );
}

export default App;
