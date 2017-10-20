
import * as Router from 'koa-router'
import { get } from 'lodash'
import { getApiRoutePrefix } from '../../common/helpers'
import { find } from './dao'
import sanitize from './sanitize'
const router = new Router({
  prefix: getApiRoutePrefix()
})

router.get('/matches', async ctx => {
  const payload = {
    age: { gte: 18, lte: 50 },
    height: { gte: 10, lte: 20 },
    maxDistance: 100,
    hasPhoto: true,
    compatibilityScore: { gte: 50, lte: 99 },
    contactsExchanged: true,
    isFavourite: true
  }
  ctx.body = await find(sanitize(payload))
})

router.post('/matches', async ctx => {
  ctx.body = await find(sanitize({}))
})

export default router.routes()
