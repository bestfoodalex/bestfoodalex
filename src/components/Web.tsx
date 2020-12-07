import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Image, Paragraph, Text } from 'grommet';
import RelativeGrid from './RelativeGrid';
import { CardDeck, TechCard, techStack } from './TechCard';
import webFaces from '../assets/web-faces.png';

const Web = () => (
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
          I'm a liaison between business goals and <strong>interactive presence</strong>.
        </Text>
      </Box>
      <Heading level="3">Techstack</Heading>
      <CardDeck>
        {techStack.map(tech => <TechCard {...tech} />)}
      </CardDeck>
      <Paragraph size="medium">alex@alexjewell.com</Paragraph>
      <WebFacesImage alt="Alex Jewell Faces" src={webFaces} />
    </Box>
    <Box direction="row">
      <Box background="accent-1" basis="75%" />
      <WebAccentCol background="accent-2" basis="25%" />
    </Box>
  </RelativeGrid>
);

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

export default Web;