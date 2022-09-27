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
  const { title, image, date, excerpt } = matterObj.data;
  const content = matterObj.content;

  return {
    slug,
    title: data.title,
    image: data.image,
    date: data.date,
    excerpt: data.excerpt,
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
