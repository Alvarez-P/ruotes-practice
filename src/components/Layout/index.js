import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'
import Grid from 'styled-components-grid'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | ITM </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Grid>
        <Grid.Unit size={3 / 12} />
        <Grid.Unit size={6 / 12} >
          <Div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
          </Div>
        </Grid.Unit>
        <Grid.Unit size={3 / 12} />
      </Grid>
    </>
  )
}
