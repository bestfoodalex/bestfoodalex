import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Footer, Heading, Image, Paragraph, Text } from 'grommet';
import { Instagram } from 'grommet-icons';
import RelativeGrid from './RelativeGrid';
import Logo from './Logo';
import face from '../assets/face.svg';

const Influence = () => (
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
        <Logo />
      </Box>
    </Box>
  </RelativeGrid>
);

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

export default Influence;