import * as React from 'react'
import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'

export interface StateProps {
  matches: Array<IMatch>;
}

const MatchRow = (props: {label: string, value: string|number}) => 
  <div className="searchResults__item__content__row">
    <span className="row__label">{ props.label }:</span>
    <span className="row__value">{ props.value }</span>
  </div>

const MatchItem = (props: IMatch) => <div key={ props._id } className="searchResults__item">
  <div className="searchResults__item__photo">
    <img src={ props.main_photo } />
  </div>
  <div className="searchResults__item__content">
    <MatchRow label="Name" value={ props.display_name } />
    <MatchRow label="Age" value={ props.age } />
    <MatchRow label="City" value={ props.city.name } />
    <MatchRow label="Height" value={ props.height_in_cm } />
    <MatchRow label="Job" value={ props.job_title } />
    <MatchRow label="Religion" value={ props.religion } />
    <MatchRow label="Compatibility score" value={ `${props.compatibility_score}%`} />
    <MatchRow label="Contacts exchanged" value={ props.contacts_exchanged } />
    <MatchRow label="Is favourite" value={ props.favourite 
      ? 'Yes'
      : 'No' 
    } />
  </div>
</div>

export default class SearchResults extends React.Component<StateProps, any> {
  public render() {
    const { matches } = this.props
    return <div className="searchResults">
      <div className="searchResults__header">Search results</div>
      { matches.map(MatchItem) }
    </div>
  }
}
