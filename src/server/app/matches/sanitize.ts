import { get } from 'lodash'
import { sanitizeRange } from '../../lib/sanitize'
import { IFind } from './dao'
import {
  MIN_AGE,
  MAX_AGE,
  MIN_COMPATIBILITY_SCORE,
  MAX_COMPATIBILITY_SCORE,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MIN_DISTANCE,
  MAX_DISTANCE,
  HAS_PHOTO_DEFAULT,
  IN_CONTACT_DEFAULT,
  IS_FAVOURITE_DEFAULT,
  MAX_DISTANCE_DEFAULT
} from './constants'

const defaultFindParameters: IFind = {
  age: { 
    gte: MIN_AGE
  },
  height: {
    gte: MIN_HEIGHT,
  },
  maxDistance: {
    lte: MAX_DISTANCE_DEFAULT
  },
  hasPhoto: false,
  inContact: false,
  isFavourite: false,
  compatibilityScore: {
    gte: MIN_COMPATIBILITY_SCORE
  }
}

export default function sanitizeRequestBody(body: any): IFind {
  const result: IFind = { ...defaultFindParameters }

  result.age = sanitizeRange({
    gte: get(body, 'age.gte', undefined),
    lte: get(body, 'age.lte', undefined),
    min: MIN_AGE,
    max: MAX_AGE,
    openLeft: false,
    openRight: true
  })

  result.height = sanitizeRange({
    gte: get(body, 'height.gte', undefined),
    lte: get(body, 'height.lte', undefined),
    min: MIN_HEIGHT,
    max: MAX_HEIGHT,
    openLeft: false,
    openRight: true
  })

  result.hasPhoto = !!get(body,'hasPhoto', HAS_PHOTO_DEFAULT)
  result.inContact = !!get(body,'inContact', IN_CONTACT_DEFAULT)
  result.isFavourite = !!get(body,'isFavourite', IS_FAVOURITE_DEFAULT)

  result.compatibilityScore = sanitizeRange({
    gte: get(body, 'compatibilityScore.gte', undefined),
    lte: get(body, 'compatibilityScore.lte', undefined),
    min: MIN_COMPATIBILITY_SCORE,
    max: MAX_COMPATIBILITY_SCORE,
    openLeft: false,
    openRight: true
  })

  result.maxDistance = sanitizeRange({
    gte: undefined,
    lte: get(body, 'maxDistance', undefined),
    min: MIN_DISTANCE,
    max: MAX_DISTANCE,
    openLeft: true,
    openRight: true
  })

  return result
}