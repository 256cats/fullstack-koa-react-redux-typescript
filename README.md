# Minimal fullstack Koa 2 + React + Redux + Webpack HMR + TypeScript + SASS starter project

Requirements:
 * Node v8

Features:
 * Koa 2, Typescript, React, Redux, SASS, Webpack + HMR, Jest
 * Webpack runs inside of Koa server, no need for Webpack dev server
 * Webpack Hot Module Replacement works out of the box
 * Watch mode - server auto-restarts on code changes
 * Production version build in the `build` folder
 * Dockerized version with ElasticSearch

## How to run - dev mode

```
yarn
yarn start-dev
```

## How to run - production mode

```
yarn build-prod
yarn start-prod
```