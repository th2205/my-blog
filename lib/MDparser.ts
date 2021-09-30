import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

    return allPostsData;
  }
}

export default new MDparser();
