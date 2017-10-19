import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import * as koaWebpack from 'koa-webpack'
import * as path from 'path'
import { config } from './config'
import { logger } from './logging'
import { routes } from './routes'
import { NODE_ENV_DEV } from './constants'
const app = new Koa()

app.use(logger)
app.use(routes)

if (NODE_ENV_DEV) { // enable webpack hot reload
  // tslint:disable-next-line
  const webpackConfig = require(config.dev.webpack)

  app.use(koaWebpack({
    config: webpackConfig
  }))
}

app.use(koaStatic(NODE_ENV_DEV
  ? config.dev.public
  : config.build.public
))

app.listen(config.port)

console.log(`Server running on port ${config.port}`)
