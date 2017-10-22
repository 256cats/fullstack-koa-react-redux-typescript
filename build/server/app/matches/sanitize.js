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
var lodash_1 = require("lodash");
var sanitize_1 = require("../../lib/sanitize");
var shared_1 = require("../../../shared");
var constants_1 = require("../../../shared/constants");
function sanitizeRequestBody(body) {
    var result = __assign({}, shared_1.defaultFilters);
    result.age = sanitize_1.sanitizeRange({
        gte: lodash_1.get(body, 'age.gte', undefined),
        lte: lodash_1.get(body, 'age.lte', undefined),
        min: constants_1.MIN_AGE,
        max: constants_1.MAX_AGE,
        openLeft: false,
        openRight: true
    });
    result.height = sanitize_1.sanitizeRange({
        gte: lodash_1.get(body, 'height.gte', undefined),
        lte: lodash_1.get(body, 'height.lte', undefined),
        min: constants_1.MIN_HEIGHT,
        max: constants_1.MAX_HEIGHT,
        openLeft: false,
        openRight: true
    });
    result.hasPhoto = !!lodash_1.get(body, 'hasPhoto', constants_1.HAS_PHOTO_DEFAULT);
    result.inContact = !!lodash_1.get(body, 'inContact', constants_1.IN_CONTACT_DEFAULT);
    result.isFavourite = !!lodash_1.get(body, 'isFavourite', constants_1.IS_FAVOURITE_DEFAULT);
    result.compatibilityScore = sanitize_1.sanitizeRange({
        gte: lodash_1.get(body, 'compatibilityScore.gte', undefined),
        lte: lodash_1.get(body, 'compatibilityScore.lte', undefined),
        min: constants_1.MIN_COMPATIBILITY_SCORE,
        max: constants_1.MAX_COMPATIBILITY_SCORE,
        openLeft: false,
        openRight: true
    });
    result.maxDistance = sanitize_1.sanitizeRange({
        gte: undefined,
        lte: lodash_1.get(body, 'maxDistance.lte', undefined),
        min: constants_1.MIN_DISTANCE,
        max: constants_1.MAX_DISTANCE,
        openLeft: true,
        openRight: true
    });
    return result;
}
exports.default = sanitizeRequestBody;
//# sourceMappingURL=sanitize.js.map