import React, { Suspense } from 'react'
import GlobalStyles from './styles/Global'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
const Registro = React.lazy(() => import('./pages/Registro'))
const Tarea1 = React.lazy(() => import('./pages/Tarea1'))
const Tarea2 = React.lazy(() => import('./pages/Tarea2'))

const App = () => (
  <Suspense fallback={<div />}>
    <GlobalStyles />
    <NavBar />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Registro path='/registro' />
      <Tarea1 path='/tarea1' />
      <Tarea2 path='/tarea2' />
    </Router>
  </Suspense>
)

export default App
