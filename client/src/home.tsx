import { useState } from "react";
import styled from "styled-components";

import ArticleList from "./components/ArticleList";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import type { ArticleStatus } from "./types/Article";

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 800px;
  margin: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.xl};
  height: calc(100vh - 40px);
`;

const Divider = styled.hr`
  width: 100%;
  margin: ${(props) => props.theme.spacing.md} 0;
  border-color: ${(props) => props.theme.colors.text};
`;

function App() {
  const [listType, setListType] = useState<ArticleStatus>("New");
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);

  return (
    <CenterContainer>
      <MainContainer>
        <TopBar listType={listType} setListType={setListType} />
        <Divider />
        <ArticleList
          listType={listType}
          selectedArticles={selectedArticles}
          setSelectedArticles={setSelectedArticles}
        />
        <Divider />
        <BottomBar selectedArticles={selectedArticles} />
      </MainContainer>
    </CenterContainer>
  );
}

export default App;
