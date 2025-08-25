import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { useAtom } from "jotai";

import type { Article } from "../types/Article";
import editIdAtom from "../atoms/EditId";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${(props) => props.theme.spacing.sm};
`;

const Square = styled.div<{ selected: boolean }>`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.darkAccent
      : props.theme.colors.primary};
  border: ${(props) => props.theme.border.borderWidth} solid
    ${(props) => props.theme.colors.darkAccent};
  border-radius: ${(props) => props.theme.border.borderRadius};

  &:hover {
    cursor: pointer;
  }
`;

const LeftDetailContainer = styled.div<{ editing: boolean }>`
  display: flex;
  flex-direction: column;
  column-gap: ${(props) => props.theme.spacing.sm};
  ${(props) => (props.editing ? `row-gap: ${props.theme.spacing.xs};` : "")}
`;

const DetailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(props) => props.theme.spacing.sm};
`;

const ItemTitle = styled.h3`
  font-size: ${(props) => props.theme.textSize.md};
`;

const ItemDetails = styled.p`
  line-height: 1.6;
  font-size: ${(props) => props.theme.textSize.sm};
`;

const ItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.textSize.md};
`;

const EditInput = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.lightAccent};
  margin: 0 ${(props) => props.theme.spacing.xs};
`;

interface ArticleListItemProps {
  selected: boolean;
  article: Article;
}

const ArticleListItem = ({ selected, article }: ArticleListItemProps) => {
  // Needed to focus the whole list item, not just the input
  const containerRef = useRef<HTMLLIElement>(null);

  const [editedArticle, setEditedArticle] = useState<Article>(article);

  const [editId, setEditId] = useAtom(editIdAtom);

  const editing = editId === article.id;

  useEffect(() => {
    // Set focus to the whole list item when entering edit mode
    // Needed to ensure onBlur works correctly
    if (editing) {
      containerRef.current?.focus();
    }
  }, [editing]);

  return (
    <ListItem
      ref={containerRef}
      // Needed for onBlur to work correctly
      tabIndex={-1}
      onBlurCapture={(e) => {
        // Only setEditId(null) if focus is leaving the whole ListItem
        if (!containerRef.current?.contains(e.relatedTarget)) {
          setEditId(null);
        }
      }}
    >
      <LeftContainer>
        <Square selected={selected} />
        <LeftDetailContainer editing={editing}>
          <DetailRow>
            <ItemTitle>
              {editing ? (
                <EditInput
                  value={editedArticle.title}
                  onChange={(e) =>
                    setEditedArticle({
                      ...editedArticle,
                      title: e.target.value,
                    })
                  }
                  placeholder="Title"
                />
              ) : (
                article.title || "Unknown"
              )}
            </ItemTitle>
            <ItemDetails>
              (
              {editing ? (
                <EditInput
                  value={editedArticle.siteName}
                  onChange={(e) =>
                    setEditedArticle({
                      ...editedArticle,
                      siteName: e.target.value,
                    })
                  }
                  placeholder="Site Name"
                />
              ) : (
                article.siteName || "Unknown"
              )}
              )
            </ItemDetails>
          </DetailRow>
          <DetailRow>
            <ItemDetails>
              {editing ? (
                <EditInput
                  value={editedArticle.author}
                  onChange={(e) =>
                    setEditedArticle({
                      ...editedArticle,
                      author: e.target.value,
                    })
                  }
                  placeholder="Author"
                />
              ) : (
                article.author || "Unknown"
              )}
            </ItemDetails>
            <ItemDetails>
              Added: {new Date(article.dateAdded).toLocaleDateString()}
            </ItemDetails>
          </DetailRow>
        </LeftDetailContainer>
      </LeftContainer>
      <ItemLink href={article.link} target="_blank">
        <MdOpenInNew size={24} />
      </ItemLink>
    </ListItem>
  );
};

export default ArticleListItem;
