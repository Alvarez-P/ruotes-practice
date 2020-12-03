import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  background: #2a21ac;
  overflow: hidden;
`
export const Link = styled(LinkRouter)`
  float: left;
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &[aria-current] {
    border-bottom: 4px solid #fff;
  }
  &:hover {
    background: #241e85;
  }
`