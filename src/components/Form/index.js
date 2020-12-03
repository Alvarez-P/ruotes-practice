import React from 'react'
import { StyledForm, Input, Button } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const Form = ({ buttonTitle, callback, placeholder }) => {
  const { value, onChange } = useInputValue('')

  const onSubmit = e => {
    e.preventDefault()
    callback(value)
    e.target.value = ''
    onChange(e)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        id='inputValue'
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
