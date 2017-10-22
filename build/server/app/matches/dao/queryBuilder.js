"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../common/constants");
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
exports.queryBodyBuilder = queryBodyBuilder;
//# sourceMappingURL=queryBuilder.js.map