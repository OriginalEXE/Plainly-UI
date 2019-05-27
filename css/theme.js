import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes (createMuiTheme ({
  palette: {
    primary: {
      light: 'hsl(238, 100%, 78%)',
      main: 'hsl(242, 69%, 61%)',
      dark: 'hsl(223, 85%, 37%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    secondary: {
      light: 'hsl(234, 19%, 51%)',
      main: 'hsl(231, 28%, 33%)',
      dark: 'hsl(225, 60%, 16%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: [
      'proxima-nova',
      'Helvetica',
      'Arial',
    ],
  },
}));

export default theme;
