// eslint-disable-next-line no-redeclare
/* global test, expect */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

describe ('Renders App', ()=> {
  test('Must be render Navbar', async () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toHaveTextContent('Inicio')
    expect(screen.getByRole('navigation')).toHaveTextContent('Registro')
    expect(screen.getByRole('navigation')).toHaveTextContent('Tarea 1')
    expect(screen.getByRole('navigation')).toHaveTextContent('Tarea 2')
  })
})
