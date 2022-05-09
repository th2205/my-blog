import { AxiosResponse } from "axios";
import { client, BaseReturnType } from "./base";

export async function saveImg(file: File) {
  const fromData = new FormData();

  fromData.append("file", file);
  const params = fromData;

  const response: AxiosResponse<BaseReturnType> = await client.post(
    "/img/upload",
    params
  );

  return response.data;
}
