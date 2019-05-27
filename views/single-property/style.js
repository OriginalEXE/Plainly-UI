import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { getSpacing } from '../../lib/utilities/spacing';
import theme from '../../css/theme';

export const Wrapper = styled.main`
  padding-bottom: ${getSpacing (24)};
  padding-top: ${getSpacing (24)};
`;

export const Header = styled.header`
  margin-bottom: ${getSpacing (32)};
`;

export const HeaderTitle = styled (Typography)`
  padding-bottom: ${getSpacing (4)};
  padding-top: ${getSpacing (4)};
`;

export const HeaderAddress = styled (Typography)`
  padding-bottom: ${getSpacing (4)};
  padding-top: ${getSpacing (4)};
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${getSpacing (24)};
`;

export const Rent = styled (Typography)`
  color: ${theme.palette.secondary.main};
  margin-bottom: ${getSpacing (12)};
`;

export const RentDetails = styled (Typography)`
  color: ${theme.palette.secondary.light};
  font-weight: 400;
`;
