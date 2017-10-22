import * as React from 'react'
import Checkbox from '../../Checkbox'
import { ComponentProps } from '../interfaces.d'

interface ICheckboxComponentProps {
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxWrapper = (props: ComponentProps & { name: string, label: string } ) => {
  const { filters, onFilterChange, name, label } = props

  const onToggle = () => 
    onFilterChange({ ...filters, [name]: !filters[name] })
  
  return <div className="filters__filter">
    <Checkbox
      isChecked={ filters[name] }
      label={ label }
      onToggle={ onToggle }
    />
  </div>
}

export default CheckboxWrapper
