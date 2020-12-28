import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Image } from 'grommet';
import RelativeGrid from './RelativeGrid';
import Logo from './Logo';
import { useResponsive } from '../utils/useResponsive';
import homeFaces from '../assets/home-faces.png';

const Landing: React.FC<{ pageRefs: any; refCallback: any; }> = (props) => {
  const { pageRefs: { topRef }, refCallback } = props;
  const { isMobile, isTablet } = useResponsive();
  const isResp = isMobile || isTablet;

  const FacesImage = styled(Anchor)`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    ${isResp && `
      img {
        height: 187px;
        width: 221px;
      }
    `}

    ${isMobile && `
      transform: translate(-50%, -100%);
    `}
  `;

  const WebAnchor = styled(Anchor)`
    font-size: ${isResp ? '35px' : '100px'};
    font-weight: ${isResp ? 500 : 300};
    margin-right: 24%;
    margin-top: 28%;
    ${isResp && 'text-decoration: underline;'}
    z-index: 98;
  `;

  const InfluenceAnchor = styled(Anchor)`
    font-size: ${isResp ? '25px' : '75px'};
    font-weight: ${isResp ? 500 : 300};
    margin-left: 25%;
    margin-bottom: 35%;
    ${isResp && 'text-decoration: underline;'}
    z-index: 99;
  `;

  return (
    <RelativeGrid
      columns={{
        count: 2,
        size: 'auto'
      }}
      fill="vertical"
      gap="none"
    >
      <Box alignContent="center" background="accent-4" justify="center" ref={topRef}>
        <Logo refCallback={refCallback} />
        <WebAnchor alignSelf="end" color="black" label="<Web/>" href="#web" onClick={(e) => { e.preventDefault(); refCallback('webRef'); }} />
        <FacesImage href="#me" onClick={(e) => { e.preventDefault(); refCallback('aboutRef'); }}>
          <Image alt="Alex Jewell Faces" src={homeFaces} width="medium" />
        </FacesImage>
      </Box>
      <Box alignContent="center" background="brand" justify="center">
        <InfluenceAnchor color="black" label="#influence" href="#influence" onClick={(e) => { e.preventDefault(); refCallback('influenceRef'); }} />
      </Box>
    </RelativeGrid>
  );
};

export default Landing;