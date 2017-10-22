# Minimal fullstack Koa 2 + React + Redux + Webpack HMR + TypeScript + SASS starter project

Minimum requirements:
 * Node v8.4.0
 * Docker version 17.06.1-ce,

Features:
 * Koa 2, TypeScript, React, Redux, SASS, Webpack + HMR, Jest, Reselect
 * Fullstack TypeScript project with code/Type/Interface sharing between server and client
 * Webpack runs inside of Koa server, no need for Webpack dev server
 * Webpack Hot Module Replacement works out of the box
 * Watch mode - server auto-restarts on code changes
 * Production version build in the `build` folder
 * Dockerized version with ElasticSearch [work in progress]

## How to run - dev mode

```
docker-compose up [wait for docker to start elasticsearch]
yarn
yarn start-dev
```

## How to run - production mode

```
docker-compose up [wait for docker to start elasticsearch]
yarn build-prod
yarn start-prod
```
## Test

```
yarn test-no-watch
```