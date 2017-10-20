import { IFind } from './dao'
import {
  MIN_AGE,
  MAX_AGE,
  MIN_COMPATIBILITY_SCORE,
  MAX_COMPATIBILITY_SCORE,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MIN_DISTANCE,
  MAX_DISTANCE
} from './constants'

export default function sanitizeRequestBody(body: any): IFind {
  const result: IFind = {
    age: {},

  }
}