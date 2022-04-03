import axios from "axios";

export interface BaseReturnType {
  result: number;
}

export const client = axios.create({ baseURL: "http://localhost:8080/api" });
