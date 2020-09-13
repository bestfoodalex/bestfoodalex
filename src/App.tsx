import React from 'react';
import { Avatar, Box, Button, Grommet } from 'grommet';
import { Instagram } from 'grommet-icons';
import Logo from './assets/logo.png';

const theme = {
  global: {
    colors: {
      brand: '#D5392B',
      'accent-1': '#8D2526',
      'accent-2': '#FBE16D',
      'accent-3': '#EC962D'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props: any) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
     <Box fill>
        <AppBar>
          <Avatar src={Logo} />
          <Button icon={<Instagram />} label="bestfoodalex" plain onClick={() => {}} />
        </AppBar>
       <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
         <Box
           width="small"
           background="light-2"
           elevation="small"
           align="center"
           justify="center"
         >
           sidebar
         </Box>
         <Box flex align="center" justify="center">
           app body
         </Box>
       </Box>
     </Box>
    </Grommet>
  );
}

export default App;
