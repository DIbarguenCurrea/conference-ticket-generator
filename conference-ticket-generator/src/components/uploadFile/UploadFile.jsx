import { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

function UploadFile() {
  const [file, setFile] = useState(null);

  // Cargar imagen desde localStorage al iniciar
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setFile(savedImage);
    }
  }, []);

  // Guardar imagen en el localStorage
  const handleChange = (info) => {
    const { status, originFileObj } = info.file;

    if (status === "done" || status == "uploading") {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setFile(imageUrl);
        localStorage.setItem("uploadedImage", imageUrl); // Guarda la imagen en el localStorage
        message.success("guardado correctamente.");
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
    customRequest: ({ file, onSuccess }) => {
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
      <div style={{ width: "600px" }}>
        {!file ? (
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
            </p>
            <div className="drag-text">
              <p>Haz click o arrastra un archivo para subirlo</p>
              <p>Solo se permiten imágenes</p>
            </div>
          </Dragger>
        ) : (
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

      <button
        onClick={() => {
          setFile(null);
          localStorage.removeItem("uploadedImage");
        }}
      >
        Eliminar imagen
      </button>
    </div>
  );
}

export default UploadFile;
