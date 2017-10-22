import { client, getResults } from '../../lib/elastic'
import { IMatch, IRange, IFilters } from '../../../shared'
import config from '../../common/config'
import { RESULTS_PER_PAGE } from '../../common/constants'

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

function getMissing(name: string) {
  return {
    missing: { 
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


function queryBodyBuilder(params: IFilters) {
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
  } else { 
    body.query.bool.must_not.push(getExists('main_photo'))
  }

  if(params.maxDistance.lte) {
    body.query.bool.must.push(getDistance(params.maxDistance.lte))
  }

  return body
}

export async function findMatches(params: IFilters): Promise<Array<IMatch>> {
  // todo - error handling, pagination
  console.log('body', JSON.stringify(queryBodyBuilder(params), null, 2))
  const response = await client.search({
    index: config.elastic.index.matches,
    type: config.elastic.index.matches,
    body: queryBodyBuilder(params)
  })
  return getResults(response)
}
