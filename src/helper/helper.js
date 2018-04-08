let _ = require('lodash');
let moment = require('moment');
let Access = require('../enums/access')

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
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}

module.exports = Helper;