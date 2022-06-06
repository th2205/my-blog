import { client, BaseReturnType } from "./base";

interface GetAllPosts {
  id: number;
  title: string;
  createdAt: Date;
  content: string;
  author: string;
  contentPreview: string;
  coverImgUrl: string;
}

interface IGetPostById {
  id: number;
  createdAt: Date;
  author: string;
  title: string;
  contentPreview: string;
  content: string;
  coverImgUrl: string;
}
interface SavePostParams {
  title: string;
  createdAt: Date;
  content: string;
  author: string;
  coverImgUrl: string;
  contentPreview: string;
}

export async function getAllPosts() {
  const { data } = await client.get<GetAllPosts[]>("/posts");

  return data;
}

export async function getPostById(id: number) {
  const { data } = await client.get<IGetPostById>(`/posts/${id}`);

  return data;
}

export async function savePost(post: SavePostParams) {
  const params = post;
  const response = await client.post("/posts/save", params);

  console.log(response);
  return response;
}
