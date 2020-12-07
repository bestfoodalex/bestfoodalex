import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'grommet';
import { Css3, Html5, Reactjs } from 'grommet-icons';

const techStack = [
  {
    icon: <Reactjs size="large" />,
    title: 'React',
    description: 'Along with Angular (1 & 6), vanilla JavaScript, jQuery, etc.',
    years: 6
  },
  {
    icon: <Html5 size="large" />,
    title: 'HTML5',
    description: 'Including templating languages like JSX.',
    years: 15
  },
  {
    icon: <Css3 size="large" />,
    title: 'CSS3',
    description: 'Usually via preprocessors (SASS/SCSS) or CSS-in-JS like Styled-Components.',
    years: 15
  },
];

const TechCard: React.FC<{ icon: any; title: string; description: string; years: number; }> = ({ icon, title, description, years, ...rest }) => (
  <Card>
    <header>
      {icon}
      <Heading level="4" size="small">
        {title}
      </Heading>
    </header>
    <Paragraph size="small">{description}</Paragraph>
    <Paragraph size="small">{years} years</Paragraph>
  </Card>
);

const CardDeck = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
  }
`;

export { CardDeck, TechCard, techStack };