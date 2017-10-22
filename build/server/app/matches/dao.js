"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var elastic_1 = require("../../lib/elastic");
var config_1 = require("../../common/config");
var constants_1 = require("../../common/constants");
function getRange(name, value) {
    return {
        range: (_a = {},
            _a[name] = value,
            _a)
    };
    var _a;
}
function getValue(name, value) {
    return {
        term: (_a = {},
            _a[name] = value,
            _a)
    };
    var _a;
}
function getExists(name) {
    return {
        exists: {
            field: name
        }
    };
}
function getMissing(name) {
    return {
        missing: {
            field: name
        }
    };
}
function getDistance(maxDistance) {
    return {
        geo_distance: {
            distance: maxDistance + "km",
            'city.location': {
                lat: 51.509865,
                lon: -0.118092
            }
        }
    };
}
function queryBodyBuilder(params) {
    var body = {
        query: {
            bool: {
                must: [
                    getRange('age', params.age),
                    getRange('height_in_cm', params.height),
                    getRange('compatibility_score', params.compatibilityScore),
                    getValue('favourite', params.isFavourite),
                    getRange('contacts_exchanged', params.inContact
                        ? { gte: 1 }
                        : { lte: 1 })
                ],
                must_not: [],
                should: []
            }
        },
        from: 0,
        size: constants_1.RESULTS_PER_PAGE,
        sort: [],
        aggs: {}
    };
    if (params.hasPhoto) {
        body.query.bool.must.push(getExists('main_photo'));
    }
    else {
        body.query.bool.must_not.push(getExists('main_photo'));
    }
    if (params.maxDistance.lte) {
        body.query.bool.must.push(getDistance(params.maxDistance.lte));
    }
    return body;
}
function findMatches(params) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // todo - error handling, pagination
                    console.log('body', JSON.stringify(queryBodyBuilder(params), null, 2));
                    return [4 /*yield*/, elastic_1.client.search({
                            index: config_1.default.elastic.index.matches,
                            type: config_1.default.elastic.index.matches,
                            body: queryBodyBuilder(params)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, elastic_1.getResults(response)];
            }
        });
    });
}
exports.findMatches = findMatches;
//# sourceMappingURL=dao.js.map