import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#FFA500' },
    secondary: { main: '#FFD700' },
    background: { default: '#111', paper: '#222' },
    text: { primary: '#fff', secondary: '#FFA500' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
});

export default theme;
