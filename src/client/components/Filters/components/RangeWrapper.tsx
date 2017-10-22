import * as React from 'react'
import { IFilters, IMatch, IRange } from '../../../../shared'
import Range from '../../Range'
import { range } from 'lodash'
import { ComponentProps } from '../interfaces.d'

const RangeWrapper = (props: ComponentProps & { 
  name: string, 
  label: string,
  min: number;
  max: number;
  selected: IRange;
  placeholder: {
    gte?: string;
    lte?: string;
  }
  hidden: {
    lte?: boolean;
    gte?: boolean;
  }
} ) => {
  const {
    filters, 
    onFilterChange, 
    name, 
    label, 
    min, 
    max,
    selected,
    placeholder,
    hidden
  } = props

  const onChange = (value: IRange) => 
    onFilterChange({ ...filters, [name]: value })
  
  const options = range(min, max + 1).map(i => ({ value: i, label: `${i}` }))

  return <div>
    <span>{ label }</span>
    <Range
      options={ options }
      selected={ selected }
      placeholder={ placeholder }
      onChange={ onChange }
      hidden={ hidden }
    />
  </div>
}

export default RangeWrapper
