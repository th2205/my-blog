import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostsData {
  id: string;
  date: string;
  title: string;
  thumbnailImgPath: string;
  thumbnail: string;
  tags: string[];
}

interface MatterResult {
  data: PostsData;
  content: string;
}

class MDparser {
  private postsDirectory: string;

  constructor() {
    this.postsDirectory = path.join(process.cwd(), "posts");
  }

  parse() {
    const fileNames = fs.readdirSync(this.postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(this.postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents) as unknown as MatterResult;

      return {
        id,
        ...matterResult.data,
      };
    });

    return allPostsData;
  }

  getAllPostIds() {
    const fileNames = fs.readdirSync(this.postsDirectory);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
  }

  getPostDataByid(id: string) {
    const fullPath = path.join(this.postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents) as unknown as MatterResult;

    return {
      id,
      ...matterResult.data,
    };
  }

  async parsePostContentById(id: string) {
    const fullPath = path.join(this.postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return matterResult.content;
  }

  getTags() {
    const data = this.parse();
    const tags = data.reduce((acc, cur) => {
      return [...acc, ...cur.tags];
    }, [] as string[]);

    const result = tags.reduce((acc, cur) => {
      if (!acc.hasOwnProperty(cur)) {
        acc[cur] = 1;
      } else {
        acc[cur] = acc[cur] + 1;
      }

      return acc;
    }, {});

    return result;
  }
}

export default new MDparser();
