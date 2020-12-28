import React from 'react';
import styled from 'styled-components';
import { Footer, Text } from 'grommet';
import { useResponsive } from '../utils/useResponsive';
import Logo from './Logo';

const CopyrightFooter: React.FC<{ refCallback: any }> = (props) => {
  const { refCallback } = props;
	const { isMobile } = useResponsive();
	const copyrightYear = new Date().getFullYear();

	const FooterText = styled(Text)`
	  display: block;
	  text-align: ${isMobile ? 'center' : 'right'};
	  width: 100%;

	  > a {
	  	display: block;
	  	position: static;

	  	img {
	  		height: 34px;
	  		width: 34px;
	  	}
	  }
	`;

	return (
		<Footer a11yTitle="Copyright Footer" background="brand" pad="medium">
      <FooterText size="small">
      	<Logo refCallback={refCallback} />
        <strong>&copy; Copyright {copyrightYear} Alex Jewell / @bestfoodalex.</strong> All rights reserved.<br />
        Please don't use my vector head as artwork in your home.<br />
        I charge a licensing fee for any and all Alex Jewell tattoos.
      </FooterText>
    </Footer>
	);
};

export default CopyrightFooter;