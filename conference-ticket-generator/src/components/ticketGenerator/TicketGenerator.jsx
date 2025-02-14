import Ticket from "./Ticket";
import { useSelector } from "react-redux";
import LogoMark from "../../../assets/images/logo-mark.svg";
import PatternLines from "../../../assets/images/pattern-lines.svg";

function TicketGenerator() {
  const fullName = useSelector((setFullName) => setFullName.form.fullName);
  const email = useSelector((setEmail) => setEmail.form.email);

  return (
    <>
      <div className="main" style={{}}>
        <div className="header">
          <img src={LogoMark} />
          <h1>Ticket Generator</h1>
        </div>
        <div className="content-form">
          <h2>
            Congrats, <span className="gradient-text">{fullName}</span>! <br />{" "}
            Your ticket is ready.
          </h2>
          <p>
            We have emailed your ticket to <br />
            {email} and will send updates in <br />
            the run up to the event.
          </p>
        </div>
        <div>
          <Ticket />
        </div>
        <img src={PatternLines} className="svg-lines" />
      </div>
    </>
  );
}

export default TicketGenerator;
