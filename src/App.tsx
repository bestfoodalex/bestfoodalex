import React, { useRef, useState } from 'react';
import { Grommet } from 'grommet';
import Landing from './components/Landing';
import About from './components/About';
import Web from './components/Web';
import Blockchain from './components/Blockchain';
import Influence from './components/Influence';
import CopyrightFooter from './components/CopyrightFooter';
import colors from './theme/colors';
import { PageRefType, ScrollToRefFunc } from './utils/pageRefs';

const theme = {
  global: {
    colors: {
      ...colors
    },
    font: {
      family: 'Lato',
      size: '18px',
      height: '20px'
    }
  }
};

const App = () => {
  const [blockchain, setBlockchain] = useState(false);
  const pageRefs: PageRefType = {
    topRef: useRef(),
    aboutRef: useRef(),
    webRef: useRef(),
    influenceRef: useRef()
  };

  const scrollToRef: ScrollToRefFunc = (currRef: string) => (pageRefs as any)[currRef].current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Grommet theme={theme} full>
      {blockchain
        ? (
          <Blockchain setBlockchain={setBlockchain} />
        ) : (
          <>
            <Landing pageRefs={pageRefs} refCallback={scrollToRef} />
            <About pageRefs={pageRefs} />
            <Web pageRefs={pageRefs} setBlockchain={setBlockchain} />
            <Influence pageRefs={pageRefs} refCallback={scrollToRef} />
            <CopyrightFooter refCallback={scrollToRef} />
          </>
        )
      }
    </Grommet>
  );
};

export default App;
