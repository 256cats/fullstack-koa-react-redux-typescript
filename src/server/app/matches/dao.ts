import { connect } from '../../lib/elastic'
import { Model } from './model'
import { IMatch } from '../../../shared'
import config from '../../common/config'
import { RESULTS_PER_PAGE } from '../../common/constants'

const connection = connect(config.elastic.index.matches)

export interface IFind {
  age: { 
    gte?: number; 
    lte?: number;
  }
  height: { 
    gte?: number;
    lte?: number;
  }
  maxDistance?: number;
  hasPhoto: boolean;
  compatibilityScore: { 
    gte?: number; 
    lte?: number;
  }
  inContact: boolean;
  isFavourite: boolean;
}

export async function find({}: IFind): Promise<Array<IMatch>> {
  await connection
  return Model.find({}, { per_page: RESULTS_PER_PAGE }) as Promise<Array<IMatch>>
}
