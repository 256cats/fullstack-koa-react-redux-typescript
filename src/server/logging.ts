import * as Koa from 'koa'
import { config } from './config'
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_500
} from './constants'

interface ILogData {
  method: string;
  url: string;
  query: string;
  remoteAddress: string;
  host: string;
  userAgent: string;
  statusCode: number;
  errorMessage: string;
  errorStack: string;
  data: any;
  responseTime: number;
}

function outputLog(data: Partial<ILogData>, thrownError: any) {
  if (config.prettyLog) {
    console.log(`${data.statusCode} ${data.method} ${data.url} - ${data.responseTime}ms`)
    if (thrownError) {
      console.error(thrownError)
    }
  }
  else if (data.statusCode < HTTP_STATUS_BAD_REQUEST) {
    process.stdout.write(`${JSON.stringify(data)}\n`)
  }
  else {
    process.stderr.write(`${JSON.stringify(data)}\n`)
  }
}

export async function logger(ctx: Koa.Context, next: () => Promise<any>) {

  const start = new Date().getMilliseconds()

  const logData: Partial<ILogData> = {
    host: ctx.headers.host,
    method: ctx.method,
    query: ctx.query,
    remoteAddress: ctx.request.ip,
    url: ctx.url,
    userAgent: ctx.headers['user-agent']
  }

  let errorThrown: any = null
  try {
    await next()
    logData.statusCode = ctx.status
  }
  catch (e) {
    errorThrown = e
    logData.errorMessage = e.message
    logData.errorStack = e.stack
    logData.statusCode = e.status || HTTP_STATUS_500
    if (e.data) {
      logData.data = e.data
    }
  }

  logData.responseTime = new Date().getMilliseconds() - start
  outputLog(logData, errorThrown)

  if (errorThrown) {
    throw errorThrown
  }
}
