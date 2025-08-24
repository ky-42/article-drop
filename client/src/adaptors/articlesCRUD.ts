import type { Article, ArticleStatus } from "../types/Article";

const getArticles = async (
  status: ArticleStatus,
  page: number,
  perPage: number
): Promise<Article[]> => {
  return [
    {
      id: 11,
      downloaded: false,
      link: "https://example.com/article-1",
      title: "How to Grow Tomatoes Indoors",
      author: "Jane Doe",
      siteName: "Gardening Weekly",
      dateAdded: "2025-07-28T14:35:00Z",
    },
    {
      id: 12,
      downloaded: true,
      link: "https://news.example.com/story-42",
      title: "The Rise of AI in Healthcare",
      author: "John Smith",
      siteName: "Tech Times",
      dateAdded: "2025-07-20T09:12:00Z",
      dateDownloaded: "2025-07-21T08:00:00Z",
    },
    {
      id: 13,
      downloaded: false,
      link: "https://blog.example.org/post-73",
      dateAdded: "2025-07-30T22:45:00Z",
    },
    {
      id: 14,
      downloaded: true,
      link: "https://medium.com/@julia/writing-habits-101",
      title: "Writing Habits That Stick",
      author: "Julia Nguyen",
      siteName: "Medium",
      dateAdded: "2025-06-15T17:00:00Z",
      dateDownloaded: "2025-06-16T12:30:00Z",
    },
    {
      id: 15,
      downloaded: false,
      link: "https://example.net/articles/mindfulness",
      title: "A Guide to Mindfulness",
      dateAdded: "2025-08-01T12:00:00Z",
    },
    {
      id: 1,
      downloaded: false,
      link: "https://example.com/article-1",
      title: "How to Grow Tomatoes Indoors",
      author: "Jane Doe",
      siteName: "Gardening Weekly",
      dateAdded: "2025-07-28T14:35:00Z",
    },
    {
      id: 2,
      downloaded: true,
      link: "https://news.example.com/story-42",
      title: "The Rise of AI in Healthcare",
      author: "John Smith",
      siteName: "Tech Times",
      dateAdded: "2025-07-20T09:12:00Z",
      dateDownloaded: "2025-07-21T08:00:00Z",
    },
    {
      id: 3,
      downloaded: false,
      link: "https://blog.example.org/post-73",
      dateAdded: "2025-07-30T22:45:00Z",
    },
    {
      id: 4,
      downloaded: true,
      link: "https://medium.com/@julia/writing-habits-101",
      title: "Writing Habits That Stick",
      author: "Julia Nguyen",
      siteName: "Medium",
      dateAdded: "2025-06-15T17:00:00Z",
      dateDownloaded: "2025-06-16T12:30:00Z",
    },
    {
      id: 5,
      downloaded: false,
      link: "https://example.net/articles/mindfulness",
      title: "A Guide to Mindfulness",
      dateAdded: "2025-08-01T12:00:00Z",
    },
    {
      id: 6,
      downloaded: false,
      link: "https://example.com/article-1",
      title: "How to Grow Tomatoes Indoors",
      author: "Jane Doe",
      siteName: "Gardening Weekly",
      dateAdded: "2025-07-28T14:35:00Z",
    },
    {
      id: 7,
      downloaded: true,
      link: "https://news.example.com/story-42",
      title: "The Rise of AI in Healthcare",
      author: "John Smith",
      siteName: "Tech Times",
      dateAdded: "2025-07-20T09:12:00Z",
      dateDownloaded: "2025-07-21T08:00:00Z",
    },
    {
      id: 8,
      downloaded: false,
      link: "https://blog.example.org/post-73",
      dateAdded: "2025-07-30T22:45:00Z",
    },
    {
      id: 9,
      downloaded: true,
      link: "https://medium.com/@julia/writing-habits-101",
      title: "Writing Habits That Stick",
      author: "Julia Nguyen",
      siteName: "Medium",
      dateAdded: "2025-06-15T17:00:00Z",
      dateDownloaded: "2025-06-16T12:30:00Z",
    },
    {
      id: 10,
      downloaded: false,
      link: "https://example.net/articles/mindfulness",
      title: "A Guide to Mindfulness",
      dateAdded: "2025-08-01T12:00:00Z",
    },
  ];

  //   const result = await fetch(
  //     `/articles?status=${status}&page=${page}&perPage=${perPage}`
  //   );

  //   if (!result.ok) {
  //     throw new Error("Failed to fetch articles");
  //   }

  //   const data = await result.json();

  //   return data.articles as Article[];
};

const addArticle = async (link: string) => {
  return;
  //   const result = await fetch(`/articles${}`, {
  //     method: "POST",
  //   });
  //   if (!result.ok) {
  //     throw new Error("Failed to add article");
  //   }
  //   const data = await result.json();
  //   return data.article as Article;
};

export { getArticles, addArticle };
