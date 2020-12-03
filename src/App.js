import React, { Suspense } from 'react'
import GlobalStyles from './styles/Global'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
const Template = React.lazy(() => import('./pages/Template'))

const App = () => (
  <Suspense fallback={<div />}>
    <GlobalStyles />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Template path='/template' />
    </Router>
    <NavBar />
  </Suspense>
)

export default App
