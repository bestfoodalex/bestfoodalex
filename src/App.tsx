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
      <Grid
        columns={{
          count: 2,
          size: 'auto'
        }}
        gap="none"
      >
        <Box background="accent-5" />
        <Box background="accent-5" id="me" pad="large">
          <Paragraph size="large">
            Socially-driven senior UI software engineer. 
            Artesian foodporn director and social media marketing expert at @bestfoodalex. 
            Blockchain and decentralization consultant and activist. 
            Leftist technocratic ghostwriter for political organizations and lobbyists, global economics watchdog groups, biotech advocacy, and libtard media.  
          </Paragraph>
        </Box>
      </Grid>
      <RelativeGrid
        columns={{
          count: 2,
          size: 'auto'
        }}
        fill="vertical"
        gap="none"
      >
        <Box pad="large">
          <WebTitle id="web" level="2">web</WebTitle>
          <Paragraph size="large">
            I've been peeking underneath the web since I was a kid, tinkering with the very fabric of the medium we now use for practically everything.
          </Paragraph>
          <Paragraph size="medium">
            Technology seamlessly drives our lives. Working through the complex process of finding simple solutions to everyday problems is where I 
            flourish, giving new opportunity to the product or brand I'm focusing on.
          </Paragraph>
          <Box background="accent-5" pad="small" width="75%">
            <Text size="medium">
              I'm a liaison between the business goals and the <strong>interactive presence</strong>.
            </Text>
          </Box>
          <Paragraph size="medium">alex@alexjewell.com</Paragraph>
          <WebFacesImage alt="Alex Jewell Faces" src={webFaces} />
        </Box>
        <Box direction="row">
          <Box background="accent-1" basis="75%" />
          <WebAccentCol background="accent-2" basis="25%" />
        </Box>
      </RelativeGrid>
      <RelativeGrid
        columns={{
          count: 2,
          size: 'auto'
        }}
        fill="vertical"
        gap="none"
      >
        <Box align="end" background="accent-3" justify="end" pad="medium">
          <InfluenceFace alignSelf="start" alt="Alex Jewell Face" src={face} />
          <FooterBorder align="start" alignSelf="end" direction="column" justify="end" pad="medium">
            <Text size="small"><strong>instagram:</strong> <Anchor href="#">@bestfoodalex <Instagram /></Anchor></Text>
            <Text size="small"><strong>facebook:</strong> <Anchor href="#">Alex Jewell</Anchor></Text>
            <Text size="small"><strong>linkedin:</strong> <Anchor href="#">Alex Jewell</Anchor></Text>
          </FooterBorder>
        </Box>
        <Box>
          <Box direction="row">
            <Box basis="75%">
              <InfluenceTitle id="influence" level="2" size="large">influ<br />ence</InfluenceTitle>
            </Box>
            <AtBox background="accent-2" basis="25%">
              <AtText size="large">@</AtText>
            </AtBox>
          </Box>
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
            <LogoImage className="bottom" href="#">
              <Image alt="Alex Jewell Logo" src={Logo} />
            </LogoImage>
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

  &.bottom {
    left: auto;
    top: auto;
    bottom: 15px;
    right: 15px;
  }

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

const WebTitle = styled(Heading)`
  font-size: 250px;
  line-height: 255px;
  margin: -120px 0 0 0;
`;

const WebFacesImage = styled(Image)`
  height: auto;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14%;
`;

const WebAccentCol = styled(Box)`
  border-top: 100px solid white;
`;

const InfluenceFace = styled(Image)`
  height: 322px;
  left: 20%;
  margin: -75px auto;
  position: absolute;
  top: 0;
  width: 310px;
`;

const InfluenceTitle = styled(Heading)`
  font-size: 250px;
  line-height: 175px;
  margin: 0;
  transform: translate(-115px, -100px);
`;

const AtBox = styled(Box)`
  overflow: hidden;
`;

const AtText = styled(Text)`
  color: white;
  font-size: 288px;
  line-height: 290px;
`;

const FooterBorder = styled(Footer)`
  border-bottom: 19px solid black;
  width: 50%;
`;

export default App;
