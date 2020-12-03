import React from 'react'
import { Link, Nav } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/template'>Template</Link>
    </Nav>
  )
}