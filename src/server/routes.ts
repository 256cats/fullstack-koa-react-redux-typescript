
import * as Router from 'koa-router'
import { HTTP_STATUS_CREATED } from './constants'

const router = new Router()

router.get('/test2', async ctx => {
    ctx.body = 'Hello World!'
})

router.get('/test', async ctx => {
  ctx.status = HTTP_STATUS_CREATED
  ctx.body = 'test'
})

export const routes = router.routes()
