import { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import UploadFile from "../uploadFile/UploadFile";
import { useDispatch, useSelector } from "react-redux";
import TicketGenerator from "../ticketGenerator/TicketGenerator";
import { setFullName, setEmail, setTypeTicket } from "../../redux/formSlice";

function FormDesktop() {
  const dispatch = useDispatch();

  const { fullName, email, typeTicket } = useSelector((state) => state.form);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Verificamos si hay una imagen cargada en el localStorage
  const checkPhotoUploaded = () => !!localStorage.getItem("uploadedImage");

  // Validación para el formulario
  useEffect(() => {
    const formComplete =
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      typeTicket !== "" &&
      checkPhotoUploaded();

    setIsFormValid(formComplete);
  }, [fullName, email, typeTicket]);

  // Incluimos el openModal en el handle para que se use en el onClick del Button
  const handleGenerateTicket = () => {
    if (isFormValid) {
      setIsModalOpen(true);
    } else {
      message.warning("Please complete all fields and upload a photo 📸");
    }
  };

  const handleTicket = (ticketType) => {
    dispatch(setTypeTicket(ticketType));
  };

  return (
    <div className="formDesktop">
      <UploadFile />
      <Form
        name="layout-multiple-vertical"
        layout="vertical"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        className="form"
      >
        <Form.Item
          label="Full Name"
          name="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            className="form-input"
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
            placeholder="John Doe"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            className="form-input"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="email@example.com"
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <p style={{ color: "white", fontWeight: "600" }}>
            Choose type ticket:
          </p>
          {["Conference", "Concert", "Soccer"].map((type) => (
            <Button
              key={type}
              type={typeTicket === type ? "primary" : "default"}
              onClick={() => handleTicket(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </Form>
      <Button
        type="primary"
        style={{
          marginTop: "20px",
          // width: "30vw",
        }}
        onClick={handleGenerateTicket}
      >
        Generate Ticket
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width="95vw"
        style={{
          top: "6vh",
        }}
        className="custom-modal"
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <TicketGenerator />
      </Modal>
    </div>
  );
}

export default FormDesktop;
