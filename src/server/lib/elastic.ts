import * as elasticOdm from 'elasticsearch-odm'
import config from '../common/config'

export function connect(index: string): Promise<any> {
  return elasticOdm.connect({
    host: config.elastic.host,
    index
  })
}

export const elastic = elasticOdm