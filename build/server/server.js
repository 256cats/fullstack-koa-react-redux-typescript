"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var koaStatic = require("koa-static");
var koaWebpack = require("koa-webpack");
var config_1 = require("./config");
var logging_1 = require("./logging");
var routes_1 = require("./routes");
var constants_1 = require("./constants");
var app = new Koa();
app.use(logging_1.logger);
app.use(routes_1.routes);
if (constants_1.NODE_ENV_DEV) {
    // tslint:disable-next-line
    var webpackConfig = require(config_1.config.dev.webpack);
    app.use(koaWebpack({
        config: webpackConfig
    }));
}
app.use(koaStatic(constants_1.NODE_ENV_DEV
    ? config_1.config.dev.public
    : config_1.config.build.public));
app.listen(config_1.config.port);
console.log("Server running on port " + config_1.config.port);
//# sourceMappingURL=server.js.map