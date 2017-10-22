"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function sanitizeRange(_a) {
    var gte = _a.gte, lte = _a.lte, min = _a.min, max = _a.max, openLeft = _a.openLeft, openRight = _a.openRight;
    gte = parseInt(gte, 10) || undefined;
    lte = parseInt(lte, 10) || undefined;
    if (!lodash_1.isNumber(gte) || gte < min) {
        gte = openLeft
            ? undefined
            : min;
    }
    if (!lodash_1.isNumber(lte) || lte > max) {
        lte = openRight
            ? undefined
            : max;
    }
    return {
        gte: gte,
        lte: lte
    };
}
exports.sanitizeRange = sanitizeRange;
//# sourceMappingURL=sanitize.js.map