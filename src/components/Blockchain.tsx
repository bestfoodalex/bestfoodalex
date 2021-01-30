import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';
import RelativeGrid from './RelativeGrid';
import { useResponsive } from '../utils/useResponsive';
import Logo from './Logo';

const Blockchain: React.FC<{ setBlockchain: any; }> = (props) => {
  const { setBlockchain } = props;
  const { isMobile, isTablet } = useResponsive();

  const BlockchainTitle = styled(Heading)`
    font-size: ${isMobile ? '50px' : isTablet ? '125px' : '250px'};
    line-height: ${isMobile ? '65px' : isTablet ? '88px' : '175px'};
    margin: 0;
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
      <Box>
        <BlockchainTitle a11yTitle="Blockchain" id="blockchain" level="2" size="large">
          block{!isMobile && <br />}chain
        </BlockchainTitle>
      </Box>
    </RelativeGrid>
  );
};

export default Blockchain;