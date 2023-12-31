const fs = require("fs");
const path = require("path");

const POSTS_PATH = "/Users/limtaehyeon/Desktop/Opsidian/brain/dev/";

const getPosts = async () => {
  const data = await fs.readdirSync(POSTS_PATH);

  console.log(data);
};

const getPostsFromNotionDataBase = async () => {};

getPosts();
