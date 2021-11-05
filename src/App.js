import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './Routes'
import AuthProvider from './contexts/authContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routers />
      </Router>
    </AuthProvider>
  );
}

export default App;
