import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

function UploadFile() {
  const [file, setFile] = useState(null);
  const uploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const isImage = file.type.startWith("image/");
      if (!isImage) {
        message.error("You can only upload image file!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
  };

  return (
    <div>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
        </p>
        <div className="drag-text">
          <p>Click or drag a file to upload it.</p>
          <p>Only images are allowed.</p>
        </div>
      </Dragger>
      {file && (
        <div style={{ marginTop: "20px" }}>
          <p>Vista previa:</p>
          <img
            src={file}
            alt="preview"
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default UploadFile;
