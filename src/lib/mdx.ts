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
  tags?: string[];
  category?: string;
  author?: string;
  lastModified?: string;
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

export function getAllTags(
  type: "procedimientos" | "casos-de-exito" | "blog"
): string[] {
  const allContent = getAllContent(type);
  const tagSet = new Set<string>();

  for (const content of allContent) {
    if (content.tags) {
      for (const tag of content.tags) {
        tagSet.add(tag);
      }
    }
  }

  return Array.from(tagSet).sort();
}

export function getContentByTag(
  type: "procedimientos" | "casos-de-exito" | "blog",
  tag: string
): ContentMeta[] {
  return getAllContent(type).filter(
    (content) => content.tags && content.tags.includes(tag)
  );
}

export function getAllCategories(
  type: "procedimientos" | "casos-de-exito" | "blog"
): string[] {
  const allContent = getAllContent(type);
  const categorySet = new Set<string>();

  for (const content of allContent) {
    if (content.category) {
      categorySet.add(content.category);
    }
  }

  return Array.from(categorySet).sort();
}

export function getContentByCategory(
  type: "procedimientos" | "casos-de-exito" | "blog",
  category: string
): ContentMeta[] {
  return getAllContent(type).filter(
    (content) => content.category === category
  );
}

export function getRelatedContent(
  type: "procedimientos" | "casos-de-exito" | "blog",
  currentSlug: string,
  limit: number = 3
): ContentMeta[] {
  const current = getContentBySlug(type, currentSlug);
  if (!current) return [];

  const allContent = getAllContent(type).filter((c) => c.slug !== currentSlug);

  // Score by shared tags and same category
  const scored = allContent.map((content) => {
    let score = 0;
    if (current.meta.tags && content.tags) {
      for (const tag of current.meta.tags) {
        if (content.tags.includes(tag)) score += 2;
      }
    }
    if (current.meta.category && content.category === current.meta.category) {
      score += 1;
    }
    return { content, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.content);
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
