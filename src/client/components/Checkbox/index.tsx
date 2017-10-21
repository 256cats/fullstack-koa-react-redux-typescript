import * as React from 'react'
import '!style-loader!css-loader!sass-loader!./scss/index.scss'

export interface IStateProps {
  label: string;
  isChecked: boolean;
}

export interface IDispatchProps {
  onToggle: () => void;
}

export type ComponentProps = IStateProps & IDispatchProps

export default class Checkbox extends React.Component<ComponentProps, any> {
  public render() {
    const { label, isChecked, onToggle } = this.props
    return <div>
      <span>{ label }</span>
      <input
        type="checkbox"
        checked={ isChecked }
        onClick={ onToggle }
      />
    </div>
  }
}
