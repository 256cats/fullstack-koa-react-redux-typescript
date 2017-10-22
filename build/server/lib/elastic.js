"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var elasticSearch = require("elasticsearch");
var lodash_1 = require("lodash");
var config_1 = require("../common/config");
exports.client = new elasticSearch.Client({
    host: config_1.default.elastic.host,
    log: 'info'
});
function getResults(esResponse) {
    return lodash_1.get(esResponse, 'hits.hits', [])
        .filter(function (item) { return typeof item._source !== 'undefined'; })
        .map(function (item) { return (__assign({ _id: item._id }, item._source)); });
}
exports.getResults = getResults;
//# sourceMappingURL=elastic.js.map