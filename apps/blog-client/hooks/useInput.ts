import { useState } from "react";
import { InputChangeEvent } from "@/types/event";

export function useInput(
  defaultValue: string
): [string, (e: InputChangeEvent) => void] {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: InputChangeEvent) => setValue(e.target.value);

  return [value, onChange];
}
