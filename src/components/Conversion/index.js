import React, { useState, useEffect } from 'react'
import { Subtitle } from './styles'
import { Form } from '../Form'

export const Convertion = () => {
  const convertionSaved = localStorage.getItem('convertion') || ''
  const [result, setResult] = useState(convertionSaved)
    
  useEffect(() => {
      localStorage.setItem('convertion', result)
  }, [result])

  const onChange = miles => setResult(`${miles} mi = ${parseFloat(miles) * 1.60934} km`)

  return (
    <>
      <Form
        buttonTitle='Convertir millas a Kilómetros'
        callback={onChange}
        placeholder='Ingrese la cantidad de Millas'
      />
      <Subtitle>
        {result}
      </Subtitle>
    </>
  )
}
