import { createGlobalStyle } from 'styled-components'
import FallingHearts from './FailingHearts';
import Countdown from './Countdown';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffe5ec;
  }
`

function App() {
  return(<>
      <GlobalStyle />
      <FallingHearts/>
      <Countdown targetDate='14 Feb 2024'/>
    </>
  );
}

export default App
