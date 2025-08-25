// Types related to articles

export interface Article {
  id: number;
  link: string;
  dateAdded: string;
  dateDownloaded?: string;
  title?: string;
  author?: string;
  siteName?: string;
}

export type ArticleStatus = "New" | "Downloaded" | "All";
