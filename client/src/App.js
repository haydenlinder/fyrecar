import './App.css';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Cars from './pages/Cars'
import MyCar from './pages/MyCar'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Profile from './pages/Profile';
import { ApolloProvider ,ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Container maxWidth='md' style={{ position: 'relative' }} disableGutters>
            <Box pt={10.25} pb={10.25} height='100vh' display='flex' flexDirection='column' alignItems='center'>
              <Switch>
                <Route path='/profile'>
                  <Profile />
                </Route>
                <Route path='/mycars/:id'>
                  <MyCar />
                </Route>
                <Route path='/'>
                  <Cars />
                </Route>
              </Switch>
            </Box>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
