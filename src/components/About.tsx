import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Grid, Paragraph } from 'grommet';
import colors from '../theme/colors';
import photo from '../assets/alexjewell.jpg';

const About: React.FC<{ pageRefs: any }> = (props) => {
  const { pageRefs: { aboutRef } } = props;

  return (
    <Grid
      columns={{
        count: 2,
        size: 'auto'
      }}
      gap="none"
    >
      <Box background="accent-3">
        <BoxOfMe />
      </Box>
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

const BoxOfMe = styled(Box)`
  background-image: url(${photo});
  background-position: center;
  background-size: auto 100%;
  height: 100%;
  opacity: .4;
  width: 100%;
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

export default About;