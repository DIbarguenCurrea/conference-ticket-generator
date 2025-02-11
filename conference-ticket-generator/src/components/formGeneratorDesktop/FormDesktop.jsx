import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "../uploadFile/UploadFile";
import { setFullName, setEmail, setTypeTicket } from "../../redux/formSlice";

function FormDesktop() {
  const dispatch = useDispatch();

  const { fullName, email, typeTicket } = useSelector((state) => state.form);

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
            style={{ width: "550px" }}
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
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
            style={{ width: "550px" }}
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
          width: "100%",
        }}
      >
        Generate Ticket
      </Button>
    </div>
  );
}

export default FormDesktop;
