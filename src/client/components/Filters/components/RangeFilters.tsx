import * as React from 'react'
import { ComponentProps } from '../interfaces.d'
import RangeWrapper from './RangeWrapper'
import {
  MIN_AGE,
  MAX_AGE,
  MIN_COMPATIBILITY_SCORE,
  MAX_COMPATIBILITY_SCORE,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MIN_DISTANCE,
  MAX_DISTANCE,
  HAS_PHOTO_DEFAULT,
  IN_CONTACT_DEFAULT,
  IS_FAVOURITE_DEFAULT,
  MAX_DISTANCE_DEFAULT,
  IRange
} from '../../../../shared'

const RangeFilters = (props: ComponentProps) => {
  const rangeFilterData = {
    compatibilityScore: {
      label: 'Compatibility score',
      min: MIN_COMPATIBILITY_SCORE,
      max: MAX_COMPATIBILITY_SCORE,
      placeholder: {}
    },
    age: {
      label: 'Age',
      min: MIN_AGE,
      max: MAX_AGE,
      placeholder: { lte: true }
    },
    height: {
      label: 'Height',
      min: MIN_HEIGHT,
      max: MAX_HEIGHT,
      placeholder: { lte: true }
    }
  }

  return Object.keys(rangeFilterData).map(name => {
    const data = { ...props, ...rangeFilterData[name], selected: props.filters[name] }
    return <RangeWrapper
      { ...data }
      name={ name }
      key={ name }
    />
  })
}

export default RangeFilters
