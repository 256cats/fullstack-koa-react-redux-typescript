import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import '!style-loader!css-loader!react-select/dist/react-select.css'
import '!style-loader!css-loader!rheostat/css/slider.css'
import '!style-loader!css-loader!rheostat/css/slider-horizontal.css'
// import '!style-loader!css-loader!rheostat/css/slider-vertical.css'
import ReactSelect from 'react-select'
import Rheostat from 'rheostat'
import { IRange } from '../../../shared'
import { range } from 'lodash'

export interface ISelectOption {
  value: number;
  label: string;
}

export interface IStateProps {
  selected: IRange;
  min: number;
  max: number;
}

export interface IDispatchProps {
  onChange: (selected: IRange) => void;
}

export type ComponentProps = IStateProps & IDispatchProps

export default class Range extends React.Component<ComponentProps, any> {
  private onChange = (values: {values: Array<number>}) => {
    const { selected, onChange } = this.props
    onChange({
      gte: values.values[0],
      lte: values.values[1]
    } as IRange)
  }

  public render() {
    const { selected, min, max } = this.props
    const { onChange } = this
    
    return <div>
      <Rheostat
        min={ min }
        max={ max }
        onValuesUpdated={ onChange }
        values={ [selected.gte, selected.lte] }
      />
    </div>
  }
}
