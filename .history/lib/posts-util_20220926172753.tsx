import fs from "fs"; // file system
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "posts");

export function getAllFileName() {
  return fs.readdirSync(postsPath);
}

const getSinglePost = (slug: string) => {
  const postPath = path.join(postsPath, `${slug}.md`);
  const fileData = fs.readFileSync(postPath);

  const matterObj = matter(fileData);
  const title: string = matterObj.data.title;
  const image: string = matterObj.data.image;
  const date: string = matterObj.data.date;
  const excerpt: string = matterObj.data.excerpt;
  const content = matterObj.content;

  const postData = {
    slug,
    title,
    image,
    date,
    excerpt,
    content,
  };

  return postData;
};

export function getAllPosts() {
  const postPaths = getAllFileName();

  const posts = postPaths.map((path) => {
    const slug = path.replace(/\.md$/, "");
    return getSinglePost(slug);
  });

  const latestPosts = posts.sort((postA, postB) =>
    postA.date < postB.date ? 1 : -1
  );

  return latestPosts;
}
