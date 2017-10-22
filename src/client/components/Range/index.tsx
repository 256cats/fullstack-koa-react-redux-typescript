import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import '!style-loader!css-loader!react-select/dist/react-select.css'
import ReactSelect from 'react-select'
import { IRange } from '../../../shared'

export interface ISelectOption {
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
  hidden: {
    lte?: boolean;
    gte?: boolean;
  }
}

export interface IDispatchProps {
  onChange: (selected: IRange) => void;
}

export type ComponentProps = IStateProps & IDispatchProps

export default class Range extends React.Component<ComponentProps, any> {
  private onChangeGte = (option: ISelectOption) => {
    const { selected, onChange } = this.props
    onChange({ ...selected, gte: option.value } as IRange)
  }

  private onChangeLte = (option: ISelectOption) => {
    const { selected, onChange } = this.props
    // debugger
    onChange({ ...selected, lte: option.value } as IRange)
  }

  public render() {
    const { options, selected, placeholder, hidden } = this.props
    const { onChangeGte, onChangeLte } = this
    return <div>
      { !hidden.gte && <ReactSelect
        onChange={ onChangeGte }
        options={ options }
        value={ selected.gte }
        placeholder={ placeholder.gte 
          ? placeholder.gte
          : undefined 
        }
        clearable={ !!placeholder.gte }
      /> }
      { !hidden.lte && <ReactSelect
        onChange={ onChangeLte }
        options={ options }
        value={ selected.lte }
        placeholder={ placeholder.lte 
          ? placeholder.lte
          : undefined 
        }
        clearable={ !!placeholder.lte }
      /> }
    </div>
  }
}
