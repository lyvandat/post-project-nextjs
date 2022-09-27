import fs from "fs"; // file system
import path from "path";
import matter from "gray-matter";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

const postsPath = path.join(process.cwd(), "posts");

export function getAllFileName() {
  return fs.readdirSync(postsPath);
}

export const getSinglePost: post = (slug: string) => {
  const postPath = path.join(postsPath, `${slug}.md`);
  const fileData = fs.readFileSync(postPath);

  const matterObj = matter(fileData);
  const title: string = matterObj.data.title;
  const image: string = matterObj.data.image;
  const date: string = matterObj.data.date;
  const excerpt: string = matterObj.data.excerpt;
  const content = matterObj.content;

  return {
    slug,
    title,
    image,
    date,
    excerpt,
    content,
  };
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
}
