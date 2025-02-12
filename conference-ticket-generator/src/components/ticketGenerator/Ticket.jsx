import PatternTicket from "../../../assets/images/pattern-ticket.svg";
import LogoMark from "../../../assets/images/logo-mark.svg";

function Ticket() {
  return (
    <div>
      <img src={PatternTicket} />
      <div>
        <img src={LogoMark} />
        <h2>Ticket Generator</h2>
      </div>
    </div>
  );
}

export default Ticket;
