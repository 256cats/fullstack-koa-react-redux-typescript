import * as path from 'path'
import {
  DEFAULT_PORT,
  NODE_ENV_DEV
} from './constants'

export interface IConfig {
  port: number;
  prettyLog: boolean;
}

const config = {
  port: process.env.NODE_PORT || DEFAULT_PORT,
  prettyLog: NODE_ENV_DEV,
  dev: {
    public: path.join(path.resolve(__dirname, '..', 'public')),
    webpack: path.join(path.resolve(__dirname, '..', '..', 'config', 'webpack', 'dev'))
  },
  build: {
    public: path.join(path.resolve(__dirname, '..', 'public'))
  }
}

export { config }
