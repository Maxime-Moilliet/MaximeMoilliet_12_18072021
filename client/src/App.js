import React from 'react'
import Routes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { UidContext } from './context/UidContext'

function App() {
  const userId = 18

  return (
    <UidContext.Provider value={userId}>
      <Router>
        <Routes />
      </Router>
    </UidContext.Provider>
  )
}

export default App
