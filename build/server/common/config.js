"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var constants_1 = require("./constants");
var config = {
    port: process.env.NODE_PORT || constants_1.DEFAULT_PORT,
    prettyLog: constants_1.NODE_ENV_DEV,
    dev: {
        public: path.join(path.resolve(__dirname, '..', '..', 'public')),
        webpack: path.join(path.resolve(__dirname, '..', '..', '..', 'config', 'webpack', 'dev'))
    },
    build: {
        public: path.join(path.resolve(__dirname, '..', '..', 'public'))
    },
    elastic: {
        host: 'localhost:9200',
        index: {
            matches: 'matches'
        }
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map