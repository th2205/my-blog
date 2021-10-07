import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

interface MatterResult {
  data: {
    title: string;
    date: string;
    cartegory?: string[];
  };
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
    const processedContent = await remark()
      .use(prism)
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();
    console.log(matterResult.content);
    return contentHtml;
  }
}

export default new MDparser();
