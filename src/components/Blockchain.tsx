import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Image } from 'grommet';
import RelativeGrid from './RelativeGrid';
import { useResponsive } from '../utils/useResponsive';
import LogoImage from '../assets/logo.png';
import BlockchainImage from '../assets/blockchain.png';

const Blockchain: React.FC<{ setBlockchain: any; }> = (props) => {
  const { setBlockchain } = props;
  const { isMobile, isTablet } = useResponsive();

  const BlockchainTitle = styled(Heading)`
    font-size: ${isMobile ? '50px' : isTablet ? '125px' : '250px'};
    line-height: ${isMobile ? '65px' : isTablet ? '88px' : '175px'};
    margin: 0;
    white-space: nowrap; 

    img {
      display: inline;
      height: 67px;
      width: 67px;
    }
  `;

  const BlockchainFigure = styled(Image)`
    display: block;
    margin-bottom: 50px;
    width: 100%;
  `;

  return (
    <RelativeGrid
      a11yTitle="Blockchain Section"
      columns={{
        count: isMobile ? 1 : 2,
        size: 'auto'
      }}
      fill="vertical"
      gap="none"
    >
      <Box pad="large">
        <BlockchainTitle a11yTitle="Blockchain" id="blockchain" level="2" size="large">
          block{!isMobile && <br />}chain
          <Image a11yTitle="Alex Jewell Logo" alt="Alex Jewell Logo" src={LogoImage} />
        </BlockchainTitle>
        <a href="#" onClick={(e) => { e.preventDefault(); setBlockchain(false); }}>Close</a>
      </Box>
      <Box>
        <BlockchainFigure alt="" src={BlockchainImage} />
      </Box>
    </RelativeGrid>
  );
};

export default Blockchain;