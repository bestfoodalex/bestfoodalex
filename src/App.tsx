import React from 'react';
import { Grommet } from 'grommet';
import Landing from './components/Landing';
import About from './components/About';
import Web from './components/Web';
import Influence from './components/Influence';

const theme = {
  global: {
    colors: {
      brand: '#50E3C2',
      'accent-1': '#BF53A2',
      'accent-2': '#F4CCE9',
      'accent-3': '#5BA8E4',
      'accent-4': '#E5E5E5',
      'accent-5': '#595858'
    },
    font: {
      family: 'Lato',
      size: '18px',
      height: '20px'
    }
  }
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <Landing />
      <About />
      <Web />
      <Influence />
    </Grommet>
  );
};

export default App;
