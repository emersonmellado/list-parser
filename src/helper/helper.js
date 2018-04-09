let _ = require('lodash')
let moment = require('moment')
let Access = require('../enums/access')
let crypto = require('crypto')

const Helper = {
    validateDate(date) {
        if (!moment(date, moment.ISO_8601).isValid()) {
            throw `Invalid date ${date}`;
        }
    },
    validateAccess(access) {
        if (!_.isNumber(access) && _.isUndefined(Access.properties[access])) {
            throw `Invalid access ${access}`;
        }
    },
    getDefaultAccess(access) {
        if (_.isUndefined(access)) {
            return Access.Public;
        }
        this.validateAccess(access);
        return access;
    },
    newGuid() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

}

module.exports = Helper;