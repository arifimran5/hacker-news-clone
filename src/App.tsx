import { useState } from 'react';
import LatestStories from './components/LatestStories';
import TopStories from './components/TopStories';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;

type ButtonDisabledProps = { disabled: boolean };
const SingleButton = styled.button<ButtonDisabledProps>`
  padding-inline: 1.2em;
  padding-block: 0.4em;
  font-family: inherit;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#e4e4e4' : '#fff')};
  border: 1px solid ${(props) => (props.disabled ? '#e4e4e4' : '#000')};
  border-radius: 3px;
`;

function App() {
  const [showLatest, setShowLatest] = useState(true);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1>Hacker News Stories</h1>
        <div>
          <SingleButton
            disabled={showLatest}
            onClick={() => setShowLatest(true)}
          >
            Latest
          </SingleButton>
          <SingleButton
            disabled={!showLatest}
            onClick={() => setShowLatest(false)}
          >
            Top
          </SingleButton>
        </div>
        {showLatest ? <LatestStories /> : <TopStories />}
      </AppContainer>
    </>
  );
}

export default App;
