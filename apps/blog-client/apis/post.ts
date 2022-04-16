import { client, BaseReturnType } from "./base";

interface SavePostParams {
  title: string;
  createdAt: Date;
  content: string;
  author: string;
}

export async function savePost(content: SavePostParams) {
  const params = content;
  const response = await client.post("/posts/save", params);

  console.log(response);
}
