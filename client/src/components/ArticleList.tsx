import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAtomValue } from "jotai";

import { getArticles } from "../adaptors/articlesCRUD";
import type { Article, ArticleStatus } from "../types/Article";
import ArticleListItem from "./ArticleListItem";
import editIdAtom from "../atoms/EditId";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.spacing.md};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  scrollbar-color: ${(props) => props.theme.colors.text} /**/
    ${(props) => props.theme.colors.primary};
`;

const ArticleContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.sm};
`;

interface ArticleListProps {
  listType: ArticleStatus;
  selectedArticles: number[];
  setSelectedArticles: (ids: number[]) => void;
}

const ArticleList = ({
  listType,
  selectedArticles,
  setSelectedArticles,
}: ArticleListProps) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const editId = useAtomValue(editIdAtom);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(await getArticles(listType, 0, 10));
    };
    fetchArticles();
  }, [listType]);

  return (
    <ListContainer>
      {articles.map((article) => (
        <ArticleContainer
          key={article.id}
          onClick={() => {
            // So that clicking to edit doesn't also select/deselect
            if (editId !== article.id) {
              // Select or deselect the article
              if (selectedArticles.includes(article.id)) {
                setSelectedArticles(
                  selectedArticles.filter((id) => id !== article.id)
                );
              } else {
                setSelectedArticles([...selectedArticles, article.id]);
              }
            }
          }}
        >
          <ArticleListItem
            selected={selectedArticles.includes(article.id)}
            article={article}
          />
        </ArticleContainer>
      ))}
    </ListContainer>
  );
};

export default ArticleList;
