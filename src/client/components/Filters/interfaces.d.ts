import { IFilters, IMatch, IRange } from '../../../shared'

export interface IStateProps {
  filters: IFilters;
}

export interface IDispatchProps {
  onFilterChange: (filters: IFilters) => void;
}

export type ComponentProps = IStateProps & IDispatchProps
