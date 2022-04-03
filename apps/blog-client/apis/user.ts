import { AxiosResponse } from "axios";
import { client, BaseReturnType } from "@/apis/base";

interface LoginParams {
  email: string;
  password: string;
}

interface LoginReturnType extends BaseReturnType {}

export async function login({ email, password }: LoginParams) {
  const data = { email, password };
  const response: AxiosResponse<LoginReturnType> = await client.post(
    "/user/login",
    data
  );

  return response.data;
}
