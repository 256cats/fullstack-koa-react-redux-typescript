import * as React from 'react'
import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import 'react-select/dist/react-select.css'
import * as ReactSelect from 'react-select'
import { IRange } from '../../../shared'

interface ISelectOption {
  value: number;
  label: string;
}

export interface IStateProps {
  options: Array<ISelectOption>;
  selected: IRange;
  placeholder: {
    gte?: string;
    lte?: string;
  }
}

export interface IDispatchProps {
  onChange: (selected: IRange) => void;
}

export type ComponentProps = IStateProps & IDispatchProps

export default class Range extends React.Component<ComponentProps, any> {
  private onChangeGte(value: number) {
    const { selected, onChange } = this.props
    onChange({ ...selected, gte: value } as IRange)
  }

  private onChangeLte(value: number) {
    const { selected, onChange } = this.props
    onChange({ ...selected, lte: value } as IRange)
  }

  public render() {
    const { options, selected, placeholder } = this.props
    const { onChangeGte, onChangeLte } = this
    return <div>
      <ReactSelect
        onChange={ onChangeGte }
        options={ options }
        value={ selected.gte }
        placeholder={ placeholder.gte 
          ? placeholder.gte
          : undefined 
        }
        clearable={ !!placeholder.gte }
      />
      <ReactSelect
        onChange={ onChangeLte }
        options={ options }
        value={ selected.gte }
        placeholder={ placeholder.lte 
          ? placeholder.lte
          : undefined 
        }
        clearable={ !!placeholder.lte }
      />
    </div>
  }
}
