import * as path from 'path'
import {
  DEFAULT_PORT,
  NODE_ENV_DEV
} from './constants'

const config = {
  port: process.env.NODE_PORT || DEFAULT_PORT,
  prettyLog: NODE_ENV_DEV,
  dev: {
    public: path.join(path.resolve(__dirname, '..', '..', 'public')),
    webpack: path.join(path.resolve(__dirname, '..', '..', '..', 'config', 'webpack', 'dev'))
  },
  build: {
    public: path.join(path.resolve(__dirname, '..', '..', 'public'))
  },
  elastic: {
    host: '10.5.0.6:9200',
    index: {
      matches: 'matches'
    }
  }
}

export default config
