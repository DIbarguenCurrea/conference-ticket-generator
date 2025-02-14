import PatternTicket from "../../../assets/images/pattern-ticket.svg";
import LogoMark from "../../../assets/images/logo-mark.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Ticket() {
  const fullName = useSelector((state) => state.form.fullName);
  const email = useSelector((state) => state.form.email);
  const image = localStorage.getItem("uploadedImage");
  const today = new Date();
  const date = `${today.toLocaleString("en-US", {
    month: "short",
  })}, ${today.getDate()}, ${today.getFullYear()}`;

  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {
    // Verifica si ya hay un número de ticket en localStorage
    let storedTicket = localStorage.getItem("ticketNumber");

    if (!storedTicket) {
      // Genera un número aleatorio entre 00001 y 99999
      let randomNum = Math.floor(Math.random() * 99999) + 1;
      storedTicket = String(randomNum).padStart(5, "0"); // Formatear con 5 dígitos
      localStorage.setItem("ticketNumber", storedTicket);
    }

    setTicketNumber(storedTicket);
  }, []);

  return (
    <div className="ticket-container">
      <img src={PatternTicket} className="ticket-svg" />
      <div className="ticket-content">
        <div className="ticket-header">
          <img src={LogoMark} className="logo" />
          <h2>Ticket Generator</h2>
        </div>
        <div className="ticket-message">
          <p>{date} /</p>
          <p> World wide</p>
        </div>

        <h3 className="ticket-number">#{ticketNumber}</h3>
        <div className="ticket-body">
          <div>
            {image && <img src={image} className="user-image" alt="User" />}
          </div>
          <div className="ticket-info">
            <h3 className="user-name">{fullName}</h3>
            <p className="user-email">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
