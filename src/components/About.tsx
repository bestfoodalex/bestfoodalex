import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Paragraph } from 'grommet';
import photo from '../assets/alexjewell.jpg';

const About = () => (
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
    <Box background="accent-5" id="me" pad="large">
      <Paragraph size="large">
        Socially-driven senior UI software engineer. 
        Artesian foodporn director and social media marketing expert at @bestfoodalex. 
        Blockchain and decentralization consultant and activist. 
        Leftist technocratic ghostwriter for political organizations and lobbyists, global economics watchdog groups, biotech advocacy, and libtard media.  
      </Paragraph>
    </Box>
  </Grid>
);

const BoxOfMe = styled(Box)`
  background-image: url(${photo});
  background-position: center;
  background-size: auto 100%;
  height: 100%;
  opacity: .4;
  width: 100%;
`;

export default About;