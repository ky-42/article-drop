import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";

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

const LeftDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: ${(props) => props.theme.spacing.sm};
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

interface ArticleListItemProps {
  link: string;
  dateAdded: string;
  selected: boolean;
  title: string;
  author: string;
  siteName: string;
}

const ArticleListItem = ({
  link,
  dateAdded,
  selected,
  title,
  author,
  siteName,
}: ArticleListItemProps) => {
  return (
    <ListItem>
      <LeftContainer>
        <Square selected={selected} />
        <LeftDetailContainer>
          <DetailRow>
            <ItemTitle>{title}</ItemTitle>
            <ItemDetails>({siteName})</ItemDetails>
          </DetailRow>
          <DetailRow>
            <ItemDetails>{author}</ItemDetails>
            <ItemDetails>
              Added: {new Date(dateAdded).toLocaleDateString()}
            </ItemDetails>
          </DetailRow>
        </LeftDetailContainer>
      </LeftContainer>
      <ItemLink href={link} target="_blank">
        <MdOpenInNew size={24} />
      </ItemLink>
    </ListItem>
  );
};

export default ArticleListItem;
