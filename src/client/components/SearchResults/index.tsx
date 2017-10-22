import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'

export interface StateProps {
  matches: Array<IMatch>;
}

const MatchItem = (props: IMatch) => <div key={ props._id }>
  <div><span>Name:</span>{ props.display_name }</div>
  <div>photo { props.main_photo }</div>
  <div>age { props.age }</div>
  <div>city { props.city.name } </div>
  <div>score { props.compatibility_score }</div>
  <div>contacts { props.contacts_exchanged }</div>
  <div>favourite { props.favourite }</div>
  <div>height { props.height_in_cm }</div>
  <div>job{ props.job_title }</div>
  <div>religion{ props.religion }</div>
</div>

export default class SearchResults extends React.Component<StateProps, any> {
  public render() {
    const { matches } = this.props
    return <div>
      <div>Search results:</div>
      { matches.map(MatchItem) }
    </div>
  }
}
