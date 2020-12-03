import React, { useState, useEffect } from 'react'
import { Li, Span } from './styles'
import { Form } from '../Form'

export const Guests = () => {
  const guestsSaved = JSON.parse(localStorage.getItem('guests')) || []
  const [guests, setGuests] = useState(guestsSaved)

  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests));
  }, [guests]);

  const onChange = nombre => setGuests([...guests, nombre])
  
  return (
    <>
      <Form
        buttonTitle='Agregar invitado'
        callback={onChange}
        placeholder='Ingrese el nombre del invitado'
      />
      <ul>
        {guests.map((nombre, index) => <Li key={index}><Span>·</Span> {nombre}</Li>)}
      </ul>
    </>
  )
}
