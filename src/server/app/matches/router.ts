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

router.post(Routes.POST_MATCHES, async (ctx: IMatchesRequestContext) => {
  const { body } = ctx.request
  const result = await findMatches(
    transformRequestBody(
      sanitize(body)
    )
  )
  ctx.body = transformResponsePayload(result)
})

export default router.routes()
