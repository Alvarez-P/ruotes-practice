import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Li, Span } from './styles'
import { Form } from '../Form'

export const Guests = () => {
  const { value, onChange } = useInputValue([])
  const addGuest = (nombre) => {
    onChange([...value, nombre])
  }
  return (
    <>
      <Form
        buttonTitle='Agregar invitado'
        callback={addGuest}
        placeholder='Ingrese el nombre del invitado'
      />
      <ul>
        {value.map((nombre, index) => <Li key={index}><Span>·</Span> {nombre}</Li>)}
      </ul>
    </>
  )
}
