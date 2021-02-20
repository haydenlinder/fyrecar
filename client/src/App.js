import logo from './logo.svg';
import './App.css';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Container>
          <Box></Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
