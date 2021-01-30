import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Image, Paragraph, Text } from 'grommet';
import RelativeGrid from './RelativeGrid';
import { CardDeck, TechCard, techStack } from './TechCard';
import { EmailArrowRight, EmailParagraph } from './EmailParagraph';
import { useResponsive } from '../utils/useResponsive';
import { PageRefType } from '../utils/pageRefs';
import webFaces from '../assets/web-faces.png';

const Web: React.FC<{ pageRefs: PageRefType; setBlockchain: any; }> = (props) => {
  const { pageRefs: { webRef }, setBlockchain } = props;
  const { isMobile, isTablet } = useResponsive();
  const isResp = isMobile || isTablet;

  const WebBox = styled(Box)`
    &.firstBox {
      padding-bottom: ${isMobile ? '50px' : '150px'};
    }

    p {
      max-width: none;
      padding-right: ${isMobile ? 0 : '75px'};
    }
  `;

  const WebTitle = styled(Heading)`
    font-size: ${isMobile ? '100px' : '250px'};
    line-height: ${isMobile ? '110px' : '255px'};
    margin: ${isMobile ? 0 : isTablet ? '-75px 0 0 0' : '-120px 0 0 0'};
    z-index: 99;
  `;

  const WebFacesImage = styled(Image)`
    height: auto;
    left: ${isMobile ? '25px' : '50%'};
    position: ${isMobile ? 'relative' : 'absolute'};
    ${!isMobile && 'top: 50%;'}
    ${!isMobile && 'transform: translate(-50%, -50%);'}
    width: ${isMobile ? '50px' : '14%'};
  `;

  const WebAccentCol = styled(Box)`
    border-top: 100px solid white;
  `;

  return (
    <RelativeGrid
      a11yTitle="Frontend Software Engineer Section: React Developer"
      columns={{
        count: isMobile ? 1 : 2,
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
        <Box align="center" direction="row" background="accent-5" pad="small" width={isResp ? '95%' : '75%'}>
          <Text size="medium">
            I'm a liaison between business goals and <strong>interactive presence</strong>.
          </Text>
          {isMobile && <WebFacesImage alt="Alex Jewell Faces" src={webFaces} />}
        </Box>
        <Heading a11yTitle="Current Tech Stack Section" level="3">Current Tech Stack</Heading>
        <CardDeck aria-label="Current tech stack includes the following languages:" className={isResp ? 'isMobile' : ''}>
          {techStack.map(tech => <TechCard {...tech} />)}
        </CardDeck>
        <Paragraph size="small">
          <strong>Other notable technologies and concepts include, but are not limited to:</strong><br />
          Node, Redux, GraphQL, Axios/fetcher, Jenkins, AWS, Agile methodology (JIRA), WordPress, eating hot chip, and meme'ing your face off.
        </Paragraph>
        <EmailParagraph a11yTitle="Email me at Alex at Alex Jewell dot com" size="medium"><EmailArrowRight /> alex@alexjewell.com</EmailParagraph>
        {!isMobile && <WebFacesImage alt="Alex Jewell Faces" src={webFaces} />}
        <a href="#" onClick={(e) => { e.preventDefault(); setBlockchain(true); }}>Blockchain</a>
      </WebBox>
      <WebBox direction="row">
        <Box background="accent-1" basis="75%" />
        <WebAccentCol background="accent-2" basis="25%" />
      </WebBox>
    </RelativeGrid>
  );
};

export default Web;