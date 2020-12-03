import React from 'react'
import { StyledForm } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const Form = ({ buttonTitle, callback, placeholder }) => {
    const { value, onChange } = useInputValue('')

    const onSubmit = e => {
        const millas = value
        e.preventDefault()
        callback(millas)
        onChange('')
    }
    return (
        <StyledForm
            onSubmit={onSubmit.bind(this)}>
            <input
                id="inputValue"
                type="text" 
                placeholder={placeholder}
                onChange={e => {
                    onChange(e.target.value)
                }}
                value={value}
            >
            </input>
            <button disabled={!value}>
                {buttonTitle}
            </button>
        </StyledForm>
    )
}