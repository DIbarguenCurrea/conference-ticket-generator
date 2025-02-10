import { Button, Form, Input, Select, Space } from "antd";
import UploadFile from "../uploadFile/UploadFile";

function FormDesktop() {
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
          name="vertical"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{ width: "550px" }} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="vertical"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{ width: "550px" }} />
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
          <Space>
            <Select
              defaultValue="Conference"
              style={{
                width: 120,
                border: "none",
              }}
              options={[
                {
                  value: "Conference",
                  label: "Conference",
                },
                {
                  value: "Concert",
                  label: "Concert",
                },
                {
                  value: "Soccer",
                  label: "Soccer",
                },
              ]}
            />
          </Space>
        </div>
      </Form>
      <Button
        type="primary"
        style={{
          marginTop: "20px",
        }}
      >
        Generate Ticket
      </Button>
    </div>
  );
}

export default FormDesktop;
