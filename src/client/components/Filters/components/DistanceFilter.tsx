import * as React from 'react'
import ReactSelect from 'react-select'
import { IFilters, IMatch, IRange } from '../../../../shared'
import Range from '../../Range'
import { range } from 'lodash'
import { ComponentProps } from '../interfaces.d'
import {
  MIN_DISTANCE,
  MAX_DISTANCE
} from '../../../../shared'
import { ISelectOption } from '../../Range'

const DistanceFilter = (props: ComponentProps) => {

  const {
    filters, 
    onFilterChange
  } = props

  const onChange = (option: ISelectOption) => 
    onFilterChange({ ...filters, maxDistance: { lte: option.value } })
  
  const options: Array<ISelectOption> = range(MIN_DISTANCE, MAX_DISTANCE + 1)
    .map((i: number): ISelectOption => ({ value: i, label: `${i}` }));

  options.unshift({ 
    value: MIN_DISTANCE,
    label: `Less than ${MIN_DISTANCE}km`
  })

  options.push({ 
    value: 10000, // todo fix hardcode
    label: `Greater than ${MAX_DISTANCE}km`
  })

  return <div>
    <span>Max distance</span>
    <ReactSelect
      onChange={ onChange }
      options={ options }
      value={ filters.maxDistance.lte }
      clearable={ false }
    />
  </div>
}

export default DistanceFilter
