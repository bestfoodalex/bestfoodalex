import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Image, Paragraph, Text } from 'grommet';
import RelativeGrid from './RelativeGrid';
import { CardDeck, TechCard, techStack } from './TechCard';
import { EmailArrowRight, EmailParagraph } from './EmailParagraph';
import webFaces from '../assets/web-faces.png';

const Web: React.FC<{ pageRefs: any }> = (props) => {
  const { pageRefs: { webRef } } = props;

  return (
    <RelativeGrid
      columns={{
        count: 2,
        size: 'auto'
      }}
      fill="vertical"
      gap="none"
    >
      <WebBox className="firstBox" pad="large">
        <WebTitle id="web" level="2" ref={webRef}>web</WebTitle>
        <Paragraph size="large">
          I've been peeking underneath the web since I was a kid, tinkering with the very fabric of the medium we now use for practically everything.
        </Paragraph>
        <Paragraph size="medium">
          Technology seamlessly drives our lives. Working through the complex process of finding simple solutions to everyday problems is where I 
          flourish, giving new opportunity to the product or brand I'm focusing on. 
          At the end of the day, this is about more than web; this is now about context. 
          This is about fluid technology for complex problems, involving an infinite number of devices, users, connections, and mediums. 
        </Paragraph>
        <Box background="accent-5" pad="small" width="75%">
          <Text size="medium">
            I'm a liaison between business goals and <strong>interactive presence</strong>.
          </Text>
        </Box>
        <Heading level="3">Current Techstack</Heading>
        <CardDeck>
          {techStack.map(tech => <TechCard {...tech} />)}
        </CardDeck>
        <Paragraph size="small">
          <strong>Other notable technologies and concepts include, but are not limited to:</strong><br />
          Node, Redux, GraphQL, Axios/fetcher, Jenkins, AWS, Agile methodology (JIRA), WordPress, eating hot chip, and meme'ing your face off.
        </Paragraph>
        <EmailParagraph size="medium"><EmailArrowRight /> alex@alexjewell.com</EmailParagraph>
        <WebFacesImage alt="Alex Jewell Faces" src={webFaces} />
      </WebBox>
      <WebBox direction="row">
        <Box background="accent-1" basis="75%" />
        <WebAccentCol background="accent-2" basis="25%" />
      </WebBox>
    </RelativeGrid>
  );
};

const WebBox = styled(Box)`
  &.firstBox {
    padding-bottom: 150px;
  }

  p {
    max-width: none;
    padding-right: 75px;
  }
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

export default Web;