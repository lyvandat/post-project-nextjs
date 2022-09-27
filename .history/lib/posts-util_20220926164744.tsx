import fs from "fs"; // file system
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "posts");

export function getAllFileName() {
  return fs.readdirSync(postsPath);
}

export function getSinglePost(slug: string) {
  const postPath = path.join(postsPath, `${slug}.md`);
  const fileData = fs.readFileSync(postPath);
  const { data, content } = matter(fileData);

  return {
    slug,
    content,
    ...data,
  };
}

export function getAllPosts() {
  const postPaths = getAllFileName();
  const posts = [];

  for (const postPath of postPaths) {
    const slug = postPath.replace(/\.md$/, "");
    console.log(slug);
    posts.push(getSinglePost(slug));
  }

  return posts;
}