import { isNumber } from 'lodash'
import { IRange } from '../../shared'
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
  console.log(gte,
    lte,
    min,
    max,
    openLeft,
    openRight)
  gte = parseInt(gte, 10) || undefined
  lte = parseInt(lte, 10) || undefined

  if(!isNumber(gte) || gte < min) {
    gte = openLeft 
      ? undefined
      : min
  }
  
  if(!isNumber(lte) || lte > max) {
    lte = openRight
      ? undefined
      : max
  }
  console.log(gte,lte)

  return {
    gte,
    lte
  } 
}
