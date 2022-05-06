import { useState } from "react";
import { InputChangeEvent } from "@/types/event";

export function useFile() {
  const [previewUrl, setPreviewUrl] = useState("");
  const [file, setFile] = useState<File>(null);

  const onFileSelect = (e: InputChangeEvent) => {
    console.log(e.target.files);
    const [file] = e.target.files;

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setFile(file);
    }
  };

  return { onFileSelect, previewUrl, file };
}
