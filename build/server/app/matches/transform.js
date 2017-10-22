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
var PERCENT_QUOTIENT = 100;
function toPercent(num) {
    return Math.floor(num * PERCENT_QUOTIENT);
}
function fromPercent(num) {
    return num / PERCENT_QUOTIENT;
}
function toPercentRange(range) {
    return {
        gte: toPercent(range.gte),
        lte: toPercent(range.lte)
    };
}
function fromPercentRange(range) {
    return {
        gte: fromPercent(range.gte),
        lte: fromPercent(range.lte)
    };
}
exports.fromPercentRange = fromPercentRange;
function transformRequestBody(body) {
    return __assign({}, body, { compatibilityScore: fromPercentRange(body.compatibilityScore) });
}
exports.transformRequestBody = transformRequestBody;
function transformResponsePayload(response) {
    return response
        .map(function (item) { return (__assign({}, item, { compatibility_score: toPercent(item.compatibility_score) })); });
}
exports.transformResponsePayload = transformResponsePayload;
//# sourceMappingURL=transform.js.map