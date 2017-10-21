import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'
import Checkbox from '../Checkbox'
import Range from '../Range'

// todo - for simplicity all filters are in one root component, 
// later it has to be further separated into different components/containers
export interface IStateProps {
  filters: IFilters;
}

export interface IDispatchProps {
  onFilterChange: (filters: IFilters) => void;
}

export type ComponentProps = IStateProps & IDispatchProps

interface ICheckboxComponentProps {
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxWrapper = (props: ComponentProps & { name: string, label: string } ) => {
  const { filters, onFilterChange, name, label } = props

  const onToggle = () => 
    onFilterChange({ ...filters, [name]: !!filters[name] })
  
  return <Checkbox
    isChecked={ filters[name] }
    label={ label }
    onToggle={ onToggle }
  />
}

export default class Filters extends React.Component<ComponentProps, any> {
  private onToggleCheckbox = name => () => {
    const { filters, onFilterChange } = this.props
    onFilterChange({ ...filters, [name]: !!filters[name]})
  }

  public render() {
    const { props } = this
    const { filters } = this.props
    const { onToggleCheckbox } = this
    return <div>
      <div>Filters</div>
      <CheckboxWrapper
        { ...props }
        name="hasPhoto"
        label="Has photo"
      />
      <CheckboxWrapper
        { ...props }
        name="inContact"
        label="In contact"
      />
      <CheckboxWrapper
        { ...props }
        name="isFavourite"
        label="Is favourite"
      /> 
    </div>
  }
}
