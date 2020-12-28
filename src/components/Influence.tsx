import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Footer, Heading, Image, Paragraph, Text } from 'grommet';
import RelativeGrid from './RelativeGrid';
import Logo from './Logo';
import { EmailArrowRight, EmailParagraph } from './EmailParagraph';
import colors from '../theme/colors';
import { useResponsive } from '../utils/useResponsive';
import face from '../assets/face.svg';

const Influence: React.FC<{ pageRefs: any; refCallback: any; }> = (props) => {
  const { pageRefs: { influenceRef }, refCallback } = props;
  const { isMobile, isTablet } = useResponsive();
  const isResp = isMobile || isTablet;

  const InfluenceTitle = styled(Heading)`
    font-size: ${isMobile ? '50px' : isTablet ? '125px' : '250px'};
    line-height: ${isMobile ? '65px' : isTablet ? '88px' : '175px'};
    margin: 0;
    ${!isResp && 'transform: translate(-115px, -100px);'}
    ${isResp ? 'padding: 15px; text-align: center;' : 'padding-top: 20px;'}
  `;

  const AtBox = styled(Box)`
    overflow: hidden;
    ${isMobile && 'align-items: center;'}
  `;

  const AtText = styled(Text)`
    color: white;
    font-size: ${isMobile ? '60px' : '288px'};
    line-height: ${isMobile ? '75px' : '290px'};
  `;

  const InfluenceFace = styled(Image)`
    height: ${isResp ? '161px' : '322px'};
    left: 20%;
    margin: ${isResp ? '-50px' : '-75px'} auto;
    ${!isResp && 'position: absolute;'}
    top: 0;
    width: ${isResp ? '155px' : '310px'};
  `;

  const FooterBorder = styled(Footer)`
    border-bottom: 19px solid ${colors.almostBlack};
    width: ${isResp ? '100%' : '50%'};
    ${isResp && 'padding-top: 100px;'}

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

  const Feet = () => (
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
  );

  return (
    <RelativeGrid
      a11yTitle="Influencer Section: @bestfoodalex"
      columns={{
        count: isMobile ? 1 : 2,
        size: 'auto'
      }}
      fill="vertical"
      gap="none"
    >
      {!isMobile && <Feet />}
      <Box>
        <Box direction="row">
          <Box basis="75%">
            <InfluenceTitle a11yTitle="Influence" id="influence" level="2" ref={influenceRef} size="large">
              influ{!isMobile && <br />}ence
            </InfluenceTitle>
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
            I'll come right out and say it: I'm{' '}
            <A a11yTitle="Follow me on Instagram at Best Food Alex" href="https://instagram.com/bestfoodalex" target="_blank">@bestfoodalex</A>{' '}
            and I'm a monster. But I'm friendly and I have cookies. I know how to translate your ooey gooey made-for-instagram food into consumable 
            content and get it in front of a hungry audience.
          </Paragraph>
          <Paragraph size="large">
            Hi, I'm Alex and I post burgers on the internet for likes.
          </Paragraph>
          <EmailParagraph a11yTitle="Email me at Alex at Best Food Alex dot com" size="medium"><EmailArrowRight /> alex@bestfoodalex.com</EmailParagraph>
          {!isResp && <Logo refCallback={refCallback} />}
        </Box>
      </Box>
      {isMobile && <Feet />}
    </RelativeGrid>
  );
};

export default Influence;