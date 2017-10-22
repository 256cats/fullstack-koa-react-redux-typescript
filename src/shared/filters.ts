import { IFilters } from './filters.d'
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

export const defaultFilters: IFilters = {
  age: {
    gte: MIN_AGE
  },
  height: {
    gte: MIN_HEIGHT
  },
  maxDistance: {
    lte: MAX_DISTANCE_DEFAULT
  },
  hasPhoto: false,
  inContact: false,
  isFavourite: false,
  compatibilityScore: {
    gte: MIN_COMPATIBILITY_SCORE,
    lte: MAX_COMPATIBILITY_SCORE
  }
}
