
import * as Router from 'koa-router'
import { getApiRoutePrefix } from '../../common/helpers'
import { find } from './dao'
const router = new Router({
  prefix: getApiRoutePrefix()
})

router.get('/matches', async ctx => {
  ctx.body = await find({
    age: { gte: 10, lte: 20 },
    height_in_cm: { gte: 10, lte: 20 },
    location: {
      lat: 51.509865,
      lon: -0.118092
    },
    city: {
      name: { type: 'string' },
      location: { type: 'geo_point'}
    },
    main_photo: { type: 'string' },
    compatibility_score: { type: 'float' },
    contacts_exchanged: { type: 'integer' },
    favourite: { type: 'boolean' },
    religion: { type: 'string' }
  })
})

router.post('/matches', async ctx => {
  ctx.body = await find({})
})

export default router.routes()
