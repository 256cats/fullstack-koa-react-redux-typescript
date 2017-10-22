"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.defaultFilters = {
    age: {
        gte: constants_1.MIN_AGE
    },
    height: {
        gte: constants_1.MIN_HEIGHT
    },
    maxDistance: {
        lte: constants_1.MAX_DISTANCE_DEFAULT
    },
    hasPhoto: false,
    inContact: false,
    isFavourite: false,
    compatibilityScore: {
        gte: constants_1.MIN_COMPATIBILITY_SCORE,
        lte: constants_1.MAX_COMPATIBILITY_SCORE
    }
};
//# sourceMappingURL=filters.js.map