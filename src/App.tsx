import { createGlobalStyle } from 'styled-components'
import FallingHearts from './FailingHearts';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffe5ec;
  }
`

function App() {
  return (<>
      <GlobalStyle />
      <FallingHearts/>
    </>
  );
}

export default App
