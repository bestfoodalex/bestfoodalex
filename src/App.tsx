import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Footer, Grid, Grommet, Heading, Image, Paragraph, Text } from 'grommet';
import { Instagram } from 'grommet-icons';
import Logo from './assets/logo.png';
import homeFaces from './assets/home-faces.png';
import webFaces from './assets/web-faces.png';
import face from './assets/face.svg';

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
      <RelativeGrid
        columns={{
          count: 2,
          size: 'auto'
        }}
        fill="vertical"
        gap="none"
      >
        <Box alignContent="center" background="accent-4" justify="center">
          <LogoImage href="#">
            <Image alt="Alex Jewell Logo" src={Logo} />
          </LogoImage>
          <WebAnchor alignSelf="end" color="black" label="<Web/>" href="#web" />
          <FacesImage href="#me">
            <Image alt="Alex Jewell Faces" src={homeFaces} width="medium" />
          </FacesImage>
        </Box>
        <Box alignContent="center" background="brand" justify="center">
          <InfluenceAnchor color="black" label="#influence" href="#influence" />
        </Box>
      </RelativeGrid>
      <Box id="me" pad="large">
        <Heading level="1" size="large">me</Heading>
        <Paragraph size="large">
          Socially-driven senior UI software engineer. 
          Artesian foodporn director and social media marketing expert at @bestfoodalex. 
          Blockchain and decentralization consultant and activist. 
          Leftist technocratic ghostwriter for political organizations and lobbyists, global economics watchdog groups, biotech advocacy, and libtard media.  
        </Paragraph>
      </Box>
      <RelativeGrid
        columns={{
          count: 2,
          size: 'auto'
        }}
        fill="vertical"
        gap="none"
        id="web"
      >
        <Box pad="large">
          <Heading level="2" size="large">web</Heading>
          <Paragraph size="large">
            I've been peeking underneath the web since I was a kid, tinkering with the very fabric of the medium we now use for practically everything.
          </Paragraph>
          <Paragraph size="medium">
            Technology seamlessly drives our lives. Working through the complex process of finding simple solutions to everyday problems is where I 
            flourish, giving new opportunity to the product or brand I'm focusing on.
          </Paragraph>
          <Box background="accent-5">
            <Paragraph size="large">
              I'm a liaison between the business goals and the <strong>interactive presence</strong>.
            </Paragraph>
          </Box>
          <Paragraph size="medium">alex@alexjewell.com</Paragraph>
          <Image alt="Alex Jewell Faces" src={webFaces} />
        </Box>
        <Box>
          <Grid
            columns={{
              count: 2,
              size: ['75%', '25%']
            }}
            fill="vertical"
            gap="none"
          >
            <Box background="accent-1" />
            <WebAccentCol background="accent-2" />
          </Grid>
        </Box>
      </RelativeGrid>
      <RelativeGrid
        columns={{
          count: 2,
          size: 'auto'
        }}
        fill="vertical"
        gap="none"
        id="influece"
      >
        <Box background="accent-3">
          <Image alt="Alex Jewell Face" src={face} />
          <Footer pad="medium">
            <Text size="small"><strong>instagram:</strong> <Anchor href="#">@bestfoodalex <Instagram /></Anchor></Text>
            <Text size="small"><strong>facebook:</strong> <Anchor href="#">Alex Jewell</Anchor></Text>
            <Text size="small"><strong>linkedin:</strong> <Anchor href="#">Alex Jewell</Anchor></Text>
          </Footer>
        </Box>
        <Box>
          <Grid
            columns={{
              count: 2,
              size: ['75%', '25%']
            }}
            gap="none"
          >
            <Box>
              <Heading level="2" size="large">influence</Heading>
            </Box>
            <Box background="accent-2">
              <Text size="large">@</Text>
            </Box>
          </Grid>
          <Box pad="large">
            <Paragraph size="medium">
              The dawn of social media created monsters. They're the kind that hide under your bed and jump out to scare you with #promoted 
              posts and seemingly baseless fame.
            </Paragraph>
            <Paragraph size="medium">
              I'll come right out and say it: I'm <strong>@bestfoodalex</strong> and I'm a monster. But I'm friendly and I have cookies. I know how to 
              translate your ooey gooey made-for-instagram food into consumable content and get it in front of a hungry audience.
            </Paragraph>
            <Paragraph size="large">
              Hi, I'm Alex and I post burgers on the internet for likes.
            </Paragraph>
            <Paragraph size="medium">alex@bestfoodalex.com</Paragraph>
          </Box>
        </Box>
      </RelativeGrid>
    </Grommet>
  );
};

const RelativeGrid = styled(Grid)`
  position: relative;
`;

const LogoImage = styled(Anchor)`
  left: 15px;
  position: absolute;
  top: 15px;

  img {
    height: 67px;
    width: 67px;
  }
`;

const WebAnchor = styled(Anchor)`
  font-size: 100px;
  font-weight: 300;
  margin-right: 24%;
  margin-top: 28%;
`;

const FacesImage = styled(Anchor)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const InfluenceAnchor = styled(Anchor)`
  font-size: 75px;
  font-weight: 300;
  margin-left: 25%;
  margin-bottom: 35%;
`;

const WebAccentCol = styled(Box)`
  border-top: 100px solid white;
`;

export default App;
