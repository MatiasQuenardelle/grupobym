import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface ContentMeta {
  title: string;
  description: string;
  date: string;
  image?: string;
  slug: string;
  [key: string]: unknown;
}

export function getContentBySlug(
  type: "procedimientos" | "casos-de-exito" | "blog",
  slug: string
): { meta: ContentMeta; content: string } | null {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: { ...data, slug } as ContentMeta,
    content,
  };
}

export function getAllContent(
  type: "procedimientos" | "casos-de-exito" | "blog"
): ContentMeta[] {
  const dir = path.join(contentDirectory, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const result = getContentBySlug(type, slug);
      return result?.meta || null;
    })
    .filter((meta): meta is ContentMeta => meta !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(
  type: "procedimientos" | "casos-de-exito" | "blog"
): string[] {
  const dir = path.join(contentDirectory, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
