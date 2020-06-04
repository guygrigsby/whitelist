import { createMuiTheme } from '@material-ui/core/styles';

const getType = () => {
  if (Math.random() >= 0.5) {
    return 'dark';
  }
  return 'light';
};

const palette = {
  type: getType(),
  primary: { main: '#000000', contrastText: '#ffffff' },
  secondary: { main: '#FFFFFF', contrastText: '#000000' },
  text: { main: '#FFF' },
};
const theme = createMuiTheme({
  palette: palette,
});

export default theme;
