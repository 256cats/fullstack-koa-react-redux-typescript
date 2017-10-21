import * as elasticSearch from 'elasticsearch'
import { get } from 'lodash'
import config from '../common/config'

export const client = new elasticSearch.Client({
  host: config.elastic.host,
  log: 'info'
})

export function getResults(esResponse: any) {
  return get(esResponse, 'hits.hits', [])
    .filter(item => typeof item._source !== 'undefined')
    .map(item => item._source)
}
