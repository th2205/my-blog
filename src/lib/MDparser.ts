// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
//
// export interface PostMetaData {
//   id: string;
//   date: string;
//   title: string;
//   thumbnailImgPath: string;
//   thumbnail: string;
//   tags: string[];
// }
//
// export interface PostsData extends PostMetaData {
//   content: string;
// }
//
// interface MatterResult {
//   data: PostsData;
//   content: string;
// }
//
// class MDParser {
//   private readonly postsDirectory: string;
//   private readonly postData: PostsData[];
//
//   constructor() {
//     this.postsDirectory = path.join(process.cwd(), "posts");
//     this.postData = this.parse();
//   }
//
//   parse() {
//     const directories = fs.readdirSync(this.postsDirectory);
//     const result = [];
//
//     for (let directory of directories) {
//       const directoryPath = path.join(this.postsDirectory, directory);
//       const fileNames = fs.readdirSync(directoryPath);
//
//       const allPostsData = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.md$/, "");
//         const fullPath = path.join(directoryPath, fileName);
//         const fileContents = fs.readFileSync(fullPath, "utf8");
//         const matterResult = matter(fileContents) as unknown as MatterResult;
//
//         return {
//           id,
//           ...matterResult.data,
//           content: matterResult.content,
//         };
//       });
//
//       result.push(...allPostsData);
//     }
//
//     return this.sortByDate(result);
//   }
//
//   getPostMetaData() {
//     return this.postData.map((data) => ({
//       id: data.id,
//       date: data.date,
//       title: data.title,
//       thumbnailImgPath: data.thumbnailImgPath,
//       thumbnail: data.thumbnail,
//       tags: data.tags,
//     }));
//   }
//
//   getPostData() {
//     return this.postData;
//   }
//
//   getPostDataById(id: string) {
//     return this.postData.find((data) => data.id === id);
//   }
//
//   getAllPostIds() {
//     return this.postData.map((data) => ({
//       params: { id: data.id.replace(/\.md$/, "") },
//     }));
//   }
//
//   getTags() {
//     const data = this.parse();
//     const tags = data.reduce((acc, cur) => {
//       return [...acc, ...cur.tags];
//     }, [] as string[]);
//
//     const result = tags.reduce((acc, cur) => {
//       if (!acc.hasOwnProperty(cur)) {
//         acc[cur] = 1;
//       } else {
//         acc[cur] = acc[cur] + 1;
//       }
//
//       return acc;
//     }, {});
//
//     return result;
//   }
//
//   getaAllPostCount() {
//     const data = this.parse();
//     const tags = data.reduce((acc, cur) => {
//       return [...acc, ...cur.tags];
//     }, [] as string[]);
//
//     return tags.length;
//   }
//
//   private sortByDate(data: PostsData[]) {
//     // @ts-ignore
//     return data.sort((a, b) => new Date(b.date) - new Date(a.date));
//   }
// }
//
// export default new MDParser();

class MDParser {}

export const mdParser = new MDParser();
