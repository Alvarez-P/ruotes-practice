import React from 'react'
import { StyledForm, Input, Button } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const Form = ({ buttonTitle, callback, placeholder }) => {
  const { value, onChange } = useInputValue('')

  const onSubmit = e => {
    e.preventDefault()
    callback(value)
    onChange('')
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        id='input'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Button disabled={!value}>
        {buttonTitle}
      </Button>
    </StyledForm>
  )
}
