import { useState } from "react";
import styled, { css } from "styled-components";

const BottomBarContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.sm};
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const LinkInput = styled.input`
  flex-grow: 4;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
  border: ${(props) => props.theme.border.borderWidth} solid
    ${(props) => props.theme.colors.lightAccent};
  border-radius: ${(props) => props.theme.border.borderRadius};
  font-size: ${(props) => props.theme.textSize.md};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.darkAccent};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

const ButtonCSS = css`
  padding: ${(props) => props.theme.spacing.md};
  border: ${(props) => props.theme.border.borderWidth} solid
    ${(props) => props.theme.colors.mildAccent};
  border-radius: ${(props) => props.theme.border.borderRadius};
  text-align: center;
  font-size: ${(props) => props.theme.textSize.md};
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

const AddArticleButton = styled.button`
  ${ButtonCSS}
  flex-grow: 1;
`;

const SelectedButton = styled.button`
  ${ButtonCSS}
  width: 100%;
`;

interface BottomBarProps {
  selectedArticles: number[];
}

const BottomBar = ({ selectedArticles }: BottomBarProps) => {
  const [newArticleLink, setNewArticleLink] = useState<string>("");

  return (
    <BottomBarContainer>
      {(() => {
        if (selectedArticles.length === 0) {
          return (
            <>
              <LinkInput
                type="text"
                placeholder="Enter article link here"
                value={newArticleLink}
                onChange={(e) => setNewArticleLink(e.target.value)}
              />
              <AddArticleButton>Add Article</AddArticleButton>
            </>
          );
        } else if (selectedArticles.length === 1) {
          return (
            <>
              <SelectedButton>Download</SelectedButton>
              <SelectedButton>Edit</SelectedButton>
              <SelectedButton>Delete</SelectedButton>
            </>
          );
        } else {
          return (
            <>
              <SelectedButton>Download Together</SelectedButton>
              <SelectedButton>Download Separate</SelectedButton>
              <SelectedButton>Delete Selected</SelectedButton>
            </>
          );
        }
      })()}
    </BottomBarContainer>
  );
};

export default BottomBar;
