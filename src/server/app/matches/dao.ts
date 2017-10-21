import { client } from '../../lib/elastic'
import { Model } from './model'
import { IMatch, IRange } from '../../../shared'
import config from '../../common/config'
import { RESULTS_PER_PAGE } from '../../common/constants'

export interface IFind {
  age: IRange;
  height: IRange;
  maxDistance?: IRange;
  hasPhoto: boolean;
  compatibilityScore: IRange;
  inContact: boolean;
  isFavourite: boolean;
}

function getRange(name: string, value: IRange) {
  return {
    range: {
      [name]: value
    }
  }
}

function getValue(name: string, value: any) {
  return {
    term: {
      [name]: value
    }
  }
}

function getExists(name: string) {
  return {
    exists: { 
      field: name 
    }
  }
}

function getDistance(maxDistance: number) {
  return {
    geo_distance : {
      distance : `${maxDistance}km`,
      'city.location': { // todo - remove hardcoded current user location
        lat: 51.509865,
        lon: -0.118092
      }
    }
  }
}

function queryBodyBuilder(params: IFind) {
  const body = {
    query: {
      bool: {
        must: [
          getRange('age', params.age),
          getRange('height_in_cm', params.height),
          getRange('compatibility_score', params.compatibilityScore),
          getValue('favourite', params.isFavourite),
          getRange('contacts_exchanged', params.inContact
            ? { gte: 1}
            : { lte: 1}
          )
        ] as any,
        must_not: [],
        should: []
      }
    },
    from: 0,
    size: RESULTS_PER_PAGE,
    sort: [],
    aggs: {}
  }

  if(params.hasPhoto) {
    body.query.bool.must.push(getExists('main_photo'))
  }

  if(params.maxDistance.lte) {
    body.query.bool.must.push(getDistance(params.maxDistance.lte))
  }

  return body
}

export async function findMatches(params: IFind): Promise<Array<IMatch>> {
  // const connection = await connectPromise
  console.log('body', JSON.stringify(queryBodyBuilder(params), null, 2))
  return client.search({
    index: config.elastic.index.matches,
    type: config.elastic.index.matches,
    body: queryBodyBuilder(params)
  })
  // return Model.find({}, { per_page: RESULTS_PER_PAGE }) as Promise<Array<IMatch>>
}
