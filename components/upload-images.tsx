"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UploadImage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    
    if (files.length + selectedFiles.length > 3) {
      alert("Você só pode enviar no máximo 3 imagens.");
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    setUploading(true);

    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const path = await uploadImage(file);
          return `https://ztzebbcxzzakufaokive.supabase.co/storage/v1/object/public/anuncios/${path}`;
        })
      );

      setImageUrls(uploadedUrls);
      setFiles([]); // Limpa os arquivos após o envio
    } catch (error) {
      console.error("Erro no upload:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div >
      <div className="flex w-1/4">
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        disabled={files.length >= 3}
      />
      <Button onClick={handleUpload} disabled={uploading || files.length === 0}>
        {uploading ? "Enviando..." : "Enviar Imagens"}
      </Button>
      </div>
      {/* Prévia das imagens antes do upload */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {files.map((file, index) => (
          <img key={index} src={URL.createObjectURL(file)} alt="Preview" width="100" />
        ))}
      </div>

      {/* Imagens enviadas */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {imageUrls.map((url, index) => (
          <div key={index}> 
            <img  src={url} alt="Imagem enviada" width="100" />
          </div>
        ))}
      </div>
    </div>
  );
}
