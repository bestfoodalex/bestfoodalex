import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Image } from 'grommet';
import RelativeGrid from './RelativeGrid';
import Logo from './Logo';
import homeFaces from '../assets/home-faces.png';

const Landing = () => (
  <RelativeGrid
    columns={{
      count: 2,
      size: 'auto'
    }}
    fill="vertical"
    gap="none"
  >
    <Box alignContent="center" background="accent-4" justify="center">
      <Logo />
      <WebAnchor alignSelf="end" color="black" label="<Web/>" href="#web" />
      <FacesImage href="#me">
        <Image alt="Alex Jewell Faces" src={homeFaces} width="medium" />
      </FacesImage>
    </Box>
    <Box alignContent="center" background="brand" justify="center">
      <InfluenceAnchor color="black" label="#influence" href="#influence" />
    </Box>
  </RelativeGrid>
);

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

export default Landing;