import styled from "styled-components";

import OptionSelect from "./OptionSelect";
import type { ArticleStatus } from "../types/Article";

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    row-gap: ${(props) => props.theme.spacing.md};
  }
`;

const AppTitle = styled.h1`
  font-size: ${(props) => props.theme.textSize.lg};
`;

interface TopBarProps {
  listType: ArticleStatus;
  setListType: (type: ArticleStatus) => void;
}

const TopBar = ({ listType, setListType }: TopBarProps) => {
  return (
    <TopBarContainer>
      <AppTitle>Article Drop</AppTitle>
      <OptionSelect
        options={["New", "Downloaded", "All"]}
        selectedOption={listType}
        setSelectedOption={setListType}
      />
    </TopBarContainer>
  );
};

export default TopBar;
