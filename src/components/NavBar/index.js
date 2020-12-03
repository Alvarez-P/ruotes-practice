import React from 'react'
import { Link, Nav } from './styles'

export const NavBar = () => (
  <Nav>
    <Link to='/'>Inicio</Link>
    <Link to='/registro'>Registro</Link>
    <Link to='/tarea1'>Tarea 1</Link>
    <Link to='/tarea2'>Tarea 2</Link>
  </Nav>
)
