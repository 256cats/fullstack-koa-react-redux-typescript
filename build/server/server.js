"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var koaStatic = require("koa-static");
var koaWebpack = require("koa-webpack");
var koaBodyParser = require("koa-bodyparser");
var config_1 = require("./common/config");
var logger = require("koa-logger");
var router_1 = require("./app/matches/router");
var constants_1 = require("./common/constants");
var publicFolder = constants_1.NODE_ENV_DEV
    ? config_1.default.dev.public
    : config_1.default.build.public;
var app = new Koa();
app.use(logger());
app.use(koaBodyParser());
app.use(router_1.default);
if (constants_1.NODE_ENV_DEV) {
    // tslint:disable-next-line
    var webpackConfig = require(config_1.default.dev.webpack);
    app.use(koaWebpack({
        config: webpackConfig
    }));
}
app.use(koaStatic(publicFolder));
app.listen(config_1.default.port);
console.log("Server running on port " + config_1.default.port);
//# sourceMappingURL=server.js.map