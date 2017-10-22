import * as React from 'react'
import { ComponentProps } from '../interfaces.d'
import CheckboxWrapper from './CheckboxWrapper'

const CheckboxFilters = (props: ComponentProps) => {
  const checkboxFilterLabel = {
    hasPhoto: 'Has photo',
    inContact: 'In contact',
    isFavourite: 'Is favourite'
  }

  return Object.keys(checkboxFilterLabel).map(name => <CheckboxWrapper
    { ...props }
    name={ name }
    label={ checkboxFilterLabel[name] }
    key={ name }
  />)
}

export default CheckboxFilters
