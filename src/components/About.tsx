import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Grid, Paragraph } from 'grommet';
import colors from '../theme/colors';
import { useResponsive } from '../utils/useResponsive';
import photo from '../assets/alexjewell.jpg';

const About: React.FC<{ pageRefs: any }> = (props) => {
  const { pageRefs: { aboutRef } } = props;
  const { isMobile } = useResponsive();

  const BoxOfMeParent = styled(Box)`
    ${isMobile && `
      min-height: 300px;
    `}
  `;

  const BoxOfMe = styled(Box)`
    background-image: url(${photo});
    background-position: center;
    background-size: auto 100%;
    height: 100%;
    opacity: .4;
    width: 100%;

    ${isMobile && `
      background-repeat: no-repeat;
      background-size: cover;
    `}
  `;

  const A = styled(Anchor)`
    &:link,
    &:active,
    &:hover,
    &:visited {
      color: ${colors.whiteGray};
      font-weight: bold;
      text-decoration: underline;
    }
  `;

  return (
    <Grid
      columns={{
        count: isMobile ? 1 : 2,
        size: 'auto'
      }}
      gap="none"
      responsive={true}
    >
      <BoxOfMeParent background="accent-3">
        <BoxOfMe />
      </BoxOfMeParent>
      <Box background="accent-5" id="me" pad="large" ref={aboutRef}>
        <Paragraph size="large">
          Socially-driven senior UI software engineer. 
          Artesian foodporn director and social media marketing expert at <A href="https://instagram.com/bestfoodalex" target="_blank">@bestfoodalex</A>. 
          Blockchain and decentralization consultant and activist. 
          Leftist technocratic ghostwriter for political organizations and lobbyists, global economics watchdog groups, biotech advocacy, and liberal media.  
        </Paragraph>
        <Paragraph size="medium">
          I've got a knack for upsetting your uncle at Thanksgiving and explaining what Bitcoin is to your aunt. Hire me for your next family gathering.
        </Paragraph>
      </Box>
    </Grid>
  );
};

export default About;