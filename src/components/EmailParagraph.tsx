import styled from 'styled-components';
import { Box, Paragraph } from 'grommet';
import colors from '../theme/colors';

const EmailParagraph = styled(Paragraph)`
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-top: 5em;
`;

const EmailArrowRight = styled(Box)`
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid ${colors['accent-5']};
  height: 0;
  margin-right: 12px;
  width: 0; 
`;

export { EmailArrowRight, EmailParagraph };