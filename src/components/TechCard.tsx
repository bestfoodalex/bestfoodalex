import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Paragraph } from 'grommet';
import { Css3, Html5, Reactjs } from 'grommet-icons';
import { useResponsive } from '../utils/useResponsive';

const techStack = [
  {
    icon: <Reactjs size="large" />,
    title: 'React',
    description: 'Flavor: TypeScript, ES6. Along with Angular (1 & 6), vanilla JavaScript, jQuery, etc.',
    years: 6
  },
  {
    icon: <Html5 size="large" />,
    title: 'HTML5',
    description: 'This is a given, but I can mark things up.',
    years: 15
  },
  {
    icon: <Css3 size="large" />,
    title: 'CSS3',
    description: 'Usually via preprocessors (SASS/SCSS) or CSS-in-JS libraries like Styled-Components.',
    years: 15
  },
];

const TechCard: React.FC<{ icon: any; title: string; description: string; years: number; }> = ({ icon, title, description, years, ...rest }) => {
  const { isMobile, isTablet } = useResponsive();
  const isResp = isMobile || isTablet;

  const Card = styled(Box)`
    ${!isResp && 'flex: 1 1 0; margin: 6px;'}
    ${isResp && 'margin-bottom: 10px;'}

    &:first-child {
      margin-left: 0;
    }

    h4,
    p {
      margin: 0;
    }

    h4 {
      padding-left: 15px;
    }

    p {
      padding: 12px !important;
    }
  `;

  return (
    <Card a11yTitle={title} background="accent-4">
      <Box align="center" as="header" background="accent-2" direction="row" pad="small">
        {icon}
        <Heading level="4" size="small">
          {title}
        </Heading>
      </Box>
      <Paragraph size="small"><em>{years} years</em></Paragraph>
      <Paragraph size="small">{description}</Paragraph>
    </Card>
  );
};

const CardDeck = styled.div`
  display: flex;
  
  &.isMobile {
    flex-direction: column;
  }
`;

export { CardDeck, TechCard, techStack };