import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form } from '../Form'

export const Convertion = () => {
    const { value, onChange } = useInputValue('0 mi = 0 km')
    const convert = (millas) => {
        onChange(`${millas} mi = ${parseInt(millas) * 1.60934} km`)
    }
    return (
        <>
            <Form
                buttonTitle='Convertir millas a Kilómetros'
                callback={convert}
                placeholder='Ingrese la cantidad de Millas'
            />
            <h2>
                {value}
            </h2>
        </>
    )
}