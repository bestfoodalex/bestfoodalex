import React from 'react';
import styled from 'styled-components';
import { Anchor, Image } from 'grommet';
import LogoImage from '../assets/logo.png';

const Logo = () => (
  <LogoAnchor href="#">
    <Image alt="Alex Jewell Logo" src={LogoImage} />
  </LogoAnchor>
);

const LogoAnchor = styled(Anchor)`
  left: 15px;
  position: absolute;
  top: 15px;

  &.bottom {
    left: auto;
    top: auto;
    bottom: 15px;
    right: 15px;
  }

  img {
    height: 67px;
    width: 67px;
  }
`;

export default Logo;