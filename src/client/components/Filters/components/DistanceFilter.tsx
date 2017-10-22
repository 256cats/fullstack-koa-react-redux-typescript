import * as React from 'react'
import { IFilters, IMatch, IRange } from '../../../../shared'
import { range } from 'lodash'
import { ComponentProps } from '../interfaces.d'
import {
  MIN_DISTANCE,
  MAX_DISTANCE
} from '../../../../shared'
import { ISelectOption } from '../../Range'
import '!style-loader!css-loader!rheostat/css/slider.css'
import '!style-loader!css-loader!rheostat/css/slider-horizontal.css'
import Rheostat from 'rheostat'

const FAKE_MAX_DISTANCE = 10000
const DistanceFilter = (props: ComponentProps) => {

  const {
    filters, 
    onFilterChange
  } = props

  const options = range(MIN_DISTANCE, MAX_DISTANCE + 1)
    .map((i: number) => ({ value: i, label: `${i}` }));

  options.unshift({ 
    value: MIN_DISTANCE,
    label: `Less than ${MIN_DISTANCE}`
  })

  options.push({ 
    value: FAKE_MAX_DISTANCE, // todo: fix hardcode
    label: `Greater than ${MAX_DISTANCE}`
  })

  const onChange = (values: {values: Array<number>}) => 
    onFilterChange({ ...filters, maxDistance: { lte: options[values.values[0]].value } })

  const { lte } = filters.maxDistance

  const selectedIndex = typeof lte === 'undefined'
    ? 0
    : options.findIndex(option => option.value === lte)

  return <div className="filters__filter">
    <span>Max distance</span>
    <div className="rangeSlider">
      <Rheostat
        min={ 0 }
        max={ options.length - 1 }
        onValuesUpdated={ onChange }
        values={ [selectedIndex] }
      />
    </div>
    <div className="filters__placeholder">
      <div className="filters__placeholder__left">
        { `${options[selectedIndex].label}km` }
      </div>
    </div>
  </div>
}

export default DistanceFilter

