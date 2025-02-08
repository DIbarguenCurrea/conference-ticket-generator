import { Button, Form, Input, Select, Space } from "antd";
import UploadFile from "../uploadFile/UploadFile";

function FormDesktop() {
  return (
    <div>
      <div>
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
            <Input />
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
            <Input />
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
        <Button type="primary">Generate Ticket</Button>
      </div>
    </div>
  );
}

export default FormDesktop;
