import { client, getResults } from '../../../lib/elastic'
import { IMatch, IRange, IFilters } from '../../../../shared'
import config from '../../../common/config'
import { queryBodyBuilder } from './queryBuilder'
const JSON_TAB = 2

export async function findMatches(params: IFilters): Promise<Array<IMatch>> {
  // todo - error handling, pagination
  console.log('request', JSON.stringify(params, null, JSON_TAB))
  console.log('body', JSON.stringify(queryBodyBuilder(params), null, JSON_TAB))
  const response = await client.search({
    index: config.elastic.index.matches,
    type: config.elastic.index.matches,
    body: queryBodyBuilder(params)
  })
  return getResults(response)
}
