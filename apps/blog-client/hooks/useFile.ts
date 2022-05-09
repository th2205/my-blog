import { useState } from "react";
import { InputChangeEvent } from "@/types/event";
import { saveImg } from "@/apis/img";

export function useFile() {
  const [previewUrl, setPreviewUrl] = useState("");
  const [file, setFile] = useState<File>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onFileSelect = async (e: InputChangeEvent) => {
    console.log(e.target.files);
    const [file] = e.target.files;

    setIsLoading(true);
    const { result } = await saveImg(file);

    if (result === 100) {
      setPreviewUrl(URL.createObjectURL(file));
      setFile(file);
      setIsLoading(false);
    }
  };

  return { onFileSelect, previewUrl, file, isLoading };
}
