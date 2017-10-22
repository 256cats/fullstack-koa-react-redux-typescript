import { IFilters, IRange, IMatch } from '../../../shared'

function toPercent(num: number) {
  return Math.floor(num * 100)
}

function fromPercent(num: number) {
  return num / 100
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