import React, { useState } from 'react';
import { Avatar, Box, Button, CheckBox, Grommet, Heading, Image, Text } from 'grommet';
import { Instagram } from 'grommet-icons';
import Logo from './assets/logo.png';
import Face from './assets/face.svg';

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
      height: '20px'
    }
  }
};

const categories = [
  {
    label: '@bestfoodalex',
    name: 'marketing',
    checked: true
  },
  {
    label: 'software engineering',
    name: 'software',
    checked: true
  },
  {
    label: 'blockchain',
    name: 'blockchain',
    checked: true
  },
  {
    label: 'politics',
    name: 'politics',
    checked: true
  },
  {
    label: 'tv / media',
    name: 'media',
    checked: true
  }
];

const categoryCheckedDefault: any = {};
categories.forEach(cat => { categoryCheckedDefault[cat.name] = cat.checked; });

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
  const [categoryChecked, setCategoryChecked] = useState(categoryCheckedDefault);
  const onChange = (event: any) => {
    const chkName = event.target.name;
    const newCategoryCheckedState = { ...categoryChecked };

    newCategoryCheckedState[chkName] = event.target.checked;

    setCategoryChecked(newCategoryCheckedState);
  };

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Avatar src={Logo} />
          <Button icon={<Instagram />} label="bestfoodalex" plain onClick={() => {}} />
        </AppBar>
        <Box direction='row' flex>
          <Box pad="medium">
            <Heading level="1" margin="10px 0" size="medium">Alex Jewell</Heading>
            <Text size="large">
              Social software engineer. 
              Boutique foodporn director and marketer. 
              Blockchain and decentralization consultant and activist. 
              Leftist technocratic ghostwriter for political organizations and lobbyists, global economics watchdog groups, biotech advocacy, and libtard media. 
            </Text>
            <Text size="medium">
              Some other text here.
            </Text>
          </Box>
          <Box pad="medium" width="large">
            <Image
              fit="contain"
              fill
              src={Face}
            />
          </Box>
        </Box>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box
            width="auto"
            background="light-2"
            elevation="small"
            pad="medium"
          >
            <Heading level="2" margin="0 0 20px 0" size="small">Categories</Heading>
            {categories.map(chk => (
              <Box pad="small">
                <CheckBox label={chk.label} name={chk.name} checked={categoryChecked[chk.name]} onChange={onChange} toggle />
              </Box>
            ))}
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
