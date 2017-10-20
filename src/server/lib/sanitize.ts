import { isNumber } from 'lodash'
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
  gte = parseInt(gte, 10)
  lte = parseInt(lte, 10)

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

  return {
    gte,
    lte
  } 
}
