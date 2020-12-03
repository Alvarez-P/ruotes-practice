import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Subtitle } from './styles'
import { Form } from '../Form'

export const Convertion = () => {
    const { value, onChange } = useInputValue('')

    const convert = (millas) => {
        onChange(millas)
    }
    return (
        <>
            <Form
                buttonTitle='Convertir millas a Kilómetros'
                callback={convert}
                placeholder='Ingrese la cantidad de Millas'
            />
            <Subtitle>
                {value} mi = {parseInt(value) * 1.60934} km
            </Subtitle>
        </>
    )
}