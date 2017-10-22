import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch, IRange } from '../../../shared'
import Checkbox from '../Checkbox'
import Range from '../Range'
import { range } from 'lodash'
import { ComponentProps } from './interfaces.d'
import CheckboxFilters from './components/CheckboxFilters'
import RangeFilters from './components/RangeFilters'
import DistanceFilter from './components/DistanceFilter'

// todo - for simplicity all filters are in one root component, 
// later it has to be further separated into different components/containers



export default class Filters extends React.Component<ComponentProps, any> {

  public render() {
    const { props } = this
    const { filters } = props
    return <div>
      <div>Filters</div>
      { CheckboxFilters(props) }
      { RangeFilters(props) }
      { DistanceFilter(props) }
      
    </div>
  }
}
