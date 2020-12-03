import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  background: #007acb;
  overflow: hidden;
`
export const Link = styled(LinkRouter)`
  float: left;
  display: block;
  color: #fff;
  text-align: center;
  padding: 13px 14px;
  text-decoration: none;
  &[aria-current] {
    border-bottom: 4px solid #fff;
  }
  &:hover {
    border-bottom: 4px solid #0061a0;
  }
`
