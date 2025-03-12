import { useEffect, useState } from "react";
import { CloudUploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Button, message, Upload } from "antd";

const { Dragger } = Upload;

function UploadFile() {
  const [file, setFile] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Cargar imagen desde localStorage al iniciar
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setFile(savedImage);
    }
  }, []);

  // Guardar la imagen en el localStorage
  const handleChange = (info) => {
    const { status, originFileObj } = info.file;

    if (status === "done") {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setFile(imageUrl);
        localStorage.setItem("uploadedImage", imageUrl); // Guarda la imagen en el localStorage
        message.success("Saved successfully.");
      };
      reader.readAsDataURL(originFileObj);
    } else if (status === "error") {
      message.error("Error loading image.");
    }
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    customRequest: ({ onSuccess }) => {
      // Simulamos una subida exitosa inmediata
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange: handleChange,
  };

  return (
    <div
      style={{
        width: isMobile ? "100vw" : "550px",
        maxWidth: "100%",
      }}
    >
      {!file ? (
        <>
          <h4 style={{ display: "flex", paddingLeft: "10px" }}>
            Upload Avatar
          </h4>
          <Dragger
            {...uploadProps}
            style={{
              width: "100%",
              maxWidth: isMobile ? "90vw" : "500px",
              minHeight: "150px",
              margin: "auto",
            }}
          >
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined
                style={{ fontSize: "48px", color: "#1890ff" }}
              />
            </p>
            <div className="drag-text">
              <p>Drag and drop or click to upload.</p>
            </div>
          </Dragger>
          <div style={{ display: "flex", gap: "10px", paddingLeft: "10px" }}>
            <InfoCircleOutlined />
            <p style={{ fontSize: isMobile ? "10px" : "14px" }}>
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>
        </>
      ) : (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p>Preview:</p>
          <img
            src={file}
            alt="preview"
            style={{ width: "200px", borderRadius: "8px" }}
          />
          <Button
            type="primary"
            onClick={() => {
              setFile(null);
              localStorage.removeItem("uploadedImage");
            }}
          >
            Change imagen
          </Button>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
