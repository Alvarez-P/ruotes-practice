import React, { useState, useEffect } from 'react'
import { Subtitle } from './styles'
import { Form } from '../Form'

export const Convertion = () => {
  const convertionSaved = localStorage.getItem('convertion') || 0
  const [miles, setMiles] = useState(convertionSaved)
    
  useEffect(() => {
      localStorage.setItem('convertion', miles)
  }, [miles])

  const onChange = mi => setMiles(mi)

  return (
    <>
      <Form
        buttonTitle='Convertir millas a Kilómetros'
        callback={onChange}
        placeholder='Ingrese la cantidad de Millas'
      />
      <Subtitle>
        {miles} mi = {parseInt(miles) * 1.60934} km
      </Subtitle>
    </>
  )
}
