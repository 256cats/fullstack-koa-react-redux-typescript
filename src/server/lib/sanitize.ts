import { isNumber } from 'lodash'
import { IRange } from '../../shared'

const PARSE_INT_BASE = 10
export interface ISanitizeRange {
  gte: any;
  lte: any;
  min: number;
  max: number;
  openLeft?: boolean;
  openRight?: boolean;
}

export function sanitizeRange({
  gte,
  lte,
  min,
  max,
  openLeft,
  openRight
}: ISanitizeRange): IRange {
  gte = parseInt(gte, PARSE_INT_BASE) || undefined
  lte = parseInt(lte, PARSE_INT_BASE) || undefined

  if (!isNumber(gte) || gte < min) {
    gte = openLeft
      ? undefined
      : min
  }

  if (!isNumber(lte) || lte > max) {
    lte = openRight
      ? undefined
      : max
  }

  return {
    gte,
    lte
  }
}
