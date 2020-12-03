import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
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
                {value.map(nombre => <li>{nombre}</li>)}
            </ul>
        </>
    )
}