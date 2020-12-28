import React from 'react';
import styled from 'styled-components';
import { Anchor, Image } from 'grommet';
import { ScrollToRefFunc } from '../utils/pageRefs';
import LogoImage from '../assets/logo.png';

const Logo: React.FC<{ refCallback: ScrollToRefFunc; }> = (props) => {
  const { refCallback } = props;

  return (
    <LogoAnchor a11yTitle="Back to Top" href="#" id="top" onClick={(e) => { e.preventDefault(); refCallback('topRef'); }}>
      <Image a11yTitle="Alex Jewell Logo" alt="Alex Jewell Logo" src={LogoImage} />
    </LogoAnchor>
  );
};

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