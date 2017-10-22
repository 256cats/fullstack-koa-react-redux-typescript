import { IFilters, IRange, IMatch } from '../../../shared'

const PERCENT_QUOTIENT = 100

function toPercent(num: number) {
  return Math.floor(num * PERCENT_QUOTIENT)
}

function fromPercent(num: number) {
  return num / PERCENT_QUOTIENT
}

function toPercentRange(range: IRange) {
  return {
    gte: toPercent(range.gte),
    lte: toPercent(range.lte)
  }
}

export function fromPercentRange(range: IRange) {
  return {
    gte: fromPercent(range.gte),
    lte: fromPercent(range.lte)
  }
}

export function transformRequestBody(body: IFilters): IFilters {
  return {
    ...body,
    compatibilityScore: fromPercentRange(body.compatibilityScore)
  }
}

export function transformResponsePayload(response: Array<IMatch>): Array<IMatch> {
  return response
    .map((item: IMatch) => ({
      ...item,
      compatibility_score: toPercent(item.compatibility_score)
    }))
}
