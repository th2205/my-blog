import { AxiosResponse } from "axios";
import { client, BaseReturnType } from "./base";

interface ISaveImgReturnType extends BaseReturnType {
  url: string;
}

export async function saveImg(file: File) {
  const fromData = new FormData();

  fromData.append("file", file);
  const params = fromData;

  const response: AxiosResponse<ISaveImgReturnType> = await client.post(
    "/img/upload",
    params
  );

  return response.data;
}
