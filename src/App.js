import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './Routes'
import AuthProvider from './contexts/authContext'

import { Dark } from './Styles/dark'
import { Light } from './Styles/ligth'
import GlobalStyles from './Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import useTheme from './Styles/useTheme'

function App() {
  const [theme, setTheme] = useTheme('light', Light);

  function togleTheme() {
    setTheme(theme.title === 'light' ? Dark : Light);
  }

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Header togleTheme={togleTheme} />
          <Routers />
          <GlobalStyles />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
