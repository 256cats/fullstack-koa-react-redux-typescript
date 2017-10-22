import { Request } from 'koa'
import * as Router from 'koa-router'
import { get } from 'lodash'
import { findMatches } from './dao'
import sanitize from './sanitize'
import { IFilters } from '../../../shared'
import { Routes } from '../../../shared'
import { transformRequestBody, transformResponsePayload } from './transform'
const router = new Router()

interface IMatchesRequestContext extends Router.IRouterContext {
  request: IMatchesRequest;
}

interface IMatchesRequest extends Request {
  body: IFilters;
}

router.get(Routes.POST_MATCHES, async ctx => {
  const payload = {
    age: { gte: 18, lte: 50 },
    height: { gte: 140, lte: 200 },
    maxDistance: 100,
    hasPhoto: true,
    compatibilityScore: { gte: 0, lte: 0.99 },
    contactsExchanged: true,
    isFavourite: true
  }
  ctx.body = await findMatches(sanitize(payload))
})

router.post(Routes.POST_MATCHES, async (ctx: IMatchesRequestContext) => {
  const { body } = ctx.request
  console.log('filter', ctx.request)
  const result = await findMatches(
    transformRequestBody(
      sanitize(body)
    )
  )
  ctx.body = transformResponsePayload(result)
})

export default router.routes()
