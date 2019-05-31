import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { getSpacing } from '../../lib/utilities/spacing';

export const Wrapper = styled.main`
  padding-bottom: ${getSpacing (32)};
  padding-top: ${getSpacing (32)};
`;

export const HeaderTitle = styled (Typography)`
  padding-bottom: ${getSpacing (4)};
  padding-top: ${getSpacing (4)};
  text-align: center;
`;

export const LoginContent = styled (Typography)`
  margin-top: ${getSpacing (32)};
  justify-content: space-around;
`;
