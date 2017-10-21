import * as elasticOdm from 'elasticsearch-odm'
import * as elasticSearch from 'elasticsearch'
import config from '../common/config'

export function connect(index: string): Promise<any> {
  return elasticOdm.connect({
    host: config.elastic.host,
    index
  })
}

export const client = new elasticSearch.Client({
  host: config.elastic.host,
  log: 'info'
});

export const elastic = elasticOdm