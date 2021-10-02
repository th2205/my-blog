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

  getPostDataByid(id) {
    const fullPath = path.join(this.postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  }
}

export default new MDparser();
