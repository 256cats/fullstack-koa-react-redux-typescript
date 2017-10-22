import * as React from 'react'
import { IFilters, IMatch, IRange } from '../../../../shared'
import Range from '../../Range'
import { range, first, last } from 'lodash'
import { ComponentProps } from '../interfaces.d'
import { debounce } from 'lodash'

enum ESliderOpen {
  left = 'left',
  right = 'right'
}

const RangeWrapper = (props: ComponentProps & { 
  name: string, 
  label: string,
  min: number;
  max: number;
  selected: IRange;
  placeholder: {
    gte?: boolean;
    lte?: boolean;
  }
  unit?: string;
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
    unit
  } = props

  const options = range(min, max + 1)
  
  if(placeholder.gte) {
    options.unshift(ESliderOpen.left)
  }

  if(placeholder.lte) {
    options.push(ESliderOpen.right)
  }

  const selectedIndex = {
    gte: options.findIndex(i => i === (typeof selected.gte === 'undefined'
      ? ESliderOpen.left
      : selected.gte)),
    lte: options.findIndex(i => i === (typeof selected.lte === 'undefined'
      ? ESliderOpen.right
      : selected.lte))
  }

  const placeholderText = {
    gte: options[selectedIndex.gte] === ESliderOpen.left
      ? `Less than ${min}`
      : options[selectedIndex.gte],
    lte: options[selectedIndex.lte] === ESliderOpen.right
      ? `Greater than ${max}`
      : options[selectedIndex.lte]
  }

  const indexToPropsValue = (value: IRange) => ({
    gte: options[value.gte] === ESliderOpen.left
      ? undefined
      : options[value.gte],
    lte: options[value.lte] === ESliderOpen.right
      ? undefined
      : options[value.lte]
  })

  const onChange = (value: IRange) => 
    onFilterChange({ ...filters, [name]: indexToPropsValue(value) })

  return <div className="filters__filter">
    <span>{ label }</span>
    <Range
      selected={ selectedIndex }
      min={ 0 }
      max={ options.length - 1 }
      onChange={ onChange }
    />
    <div className="filters__placeholder">
      <div className="filters__placeholder__left">
        { `${placeholderText.gte}${unit || ''}` }
      </div>
      <div className="filters__placeholder__right">
        { `${placeholderText.lte}${unit || ''}` }
      </div>
    </div>
  </div>
}

export default RangeWrapper
