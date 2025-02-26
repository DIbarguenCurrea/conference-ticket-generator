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
        message.success("Guardado correctamente.");
      };
      reader.readAsDataURL(originFileObj);
    } else if (status === "error") {
      message.error("Error al cargar la imagen.");
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
        message.error("Solo puedes subir archivos de imagen!");
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange: handleChange,
  };

  return (
    <div>
      <div style={{ width: isMobile ? "100vw" : "550px", padding: "10px" }}>
        {!file ? (
          <>
            <h4 style={{ display: "flex", alignItems: "start" }}>
              Upload Avatar
            </h4>
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <CloudUploadOutlined
                  style={{ fontSize: "48px", color: "#1890ff" }}
                />
              </p>
              <div className="drag-text">
                <p>Drag and drop or click to upload.</p>
              </div>
            </Dragger>
            <div style={{ display: "flex", gap: "10px" }}>
              <InfoCircleOutlined />
              <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
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
    </div>
  );
}

export default UploadFile;
