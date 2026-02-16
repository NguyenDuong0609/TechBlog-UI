export interface Author {
  name: string;
  avatar: string;
  username: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface Series {
  id: string;
  title: string;
  slug: string;
  articles: {
    id: string;
    title: string;
    slug: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  author: Author;
  tags: string[];
  publishedAt: string;
  readTime: number;
  views: number;
  comments: number;
  bookmarks: number;
  content?: string; // HTML content
  series?: Series;
  tableOfContents?: TableOfContentsItem[];
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}
