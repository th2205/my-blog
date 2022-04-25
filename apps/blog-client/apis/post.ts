import { client, BaseReturnType } from "./base";

interface GetAllPosts {
  title: string;
  createdAt: Date;
  content: string;
  author: string;
}
interface SavePostParams {
  title: string;
  createdAt: Date;
  content: string;
  author: string;
}

export async function getAllPosts() {
  const { data } = await client.get<GetAllPosts[]>("/posts");

  return data;
}

export async function savePost(content: SavePostParams) {
  const params = content;
  const response = await client.post("/posts/save", params);

  console.log(response);
  return response;
}
