import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Footer, Heading, Image, Paragraph, Text } from 'grommet';
import RelativeGrid from './RelativeGrid';
import Logo from './Logo';
import { EmailArrowRight, EmailParagraph } from './EmailParagraph';
import colors from '../theme/colors';
import face from '../assets/face.svg';

const Influence: React.FC<{ pageRefs: any }> = (props) => {
  const { pageRefs: { influenceRef } } = props;

  return (
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
        <FooterBorder align="start" alignSelf="end" direction="column" justify="end" pad="small">
          <Text size="medium"><strong>instagram:</strong> <A href="https://instagram.com/bestfoodalex" target="_blank">@bestfoodalex</A></Text>
          <Text size="medium"><strong>twitter:</strong> <A href="https://twitter.com/bestfoodalex" target="_blank">@bestfoodalex</A></Text>
          <Text size="medium"><strong>facebook:</strong> <A href="https://www.facebook.com/alexjewellalex" target="_blank">Alex Jewell</A></Text>
          <Text size="medium"><strong>linkedin:</strong> <A href="https://www.linkedin.com/in/alexjewellcom/" target="_blank">Alex Jewell</A></Text>
          <Text size="medium"><strong>github:</strong> <A href="https://github.com/bestfoodalex" target="_blank">@bestfoodalex</A></Text>
          <Text size="medium"><strong>telegram:</strong> <A href="https://t.me/bestfoodalex" target="_blank">@bestfoodalex</A></Text>
        </FooterBorder>
      </Box>
      <Box>
        <Box direction="row">
          <Box basis="75%">
            <InfluenceTitle id="influence" level="2" ref={influenceRef} size="large">influ<br />ence</InfluenceTitle>
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
            I'll come right out and say it: I'm <A href="https://instagram.com/bestfoodalex" target="_blank">@bestfoodalex</A> and I'm a monster. 
            But I'm friendly and I have cookies. I know how to translate your ooey gooey made-for-instagram food into consumable content and get 
            it in front of a hungry audience.
          </Paragraph>
          <Paragraph size="large">
            Hi, I'm Alex and I post burgers on the internet for likes.
          </Paragraph>
          <EmailParagraph size="medium"><EmailArrowRight /> alex@bestfoodalex.com</EmailParagraph>
          <Logo />
        </Box>
      </Box>
    </RelativeGrid>
  );
};

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
  padding-top: 20px;
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
  border-bottom: 19px solid ${colors.almostBlack};
  width: 50%;

  > div {
    display: none;
  }

  > span {
    display: block;
    padding-bottom: 8px;
  }
`;

const A = styled(Anchor)`
  &:link,
  &:active,
  &:hover,
  &:visited {
    color: ${colors.almostBlack};
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default Influence;