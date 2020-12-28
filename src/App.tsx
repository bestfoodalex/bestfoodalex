import React, { useRef } from 'react';
import { Grommet } from 'grommet';
import Landing from './components/Landing';
import About from './components/About';
import Web from './components/Web';
import Influence from './components/Influence';
import CopyrightFooter from './components/CopyrightFooter';
import colors from './theme/colors';

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
  const pageRefs = {
    topRef: useRef(),
    aboutRef: useRef(),
    webRef: useRef(),
    influenceRef: useRef()
  };

  const scrollToRef = (currRef: string) => (pageRefs as any)[currRef].current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Grommet theme={theme} full>
      <Landing pageRefs={pageRefs} refCallback={scrollToRef} />
      <About pageRefs={pageRefs} />
      <Web pageRefs={pageRefs} />
      <Influence pageRefs={pageRefs} refCallback={scrollToRef} />
      <CopyrightFooter refCallback={scrollToRef} />
    </Grommet>
  );
};

export default App;
