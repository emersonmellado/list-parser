"use strict"
let _ = require('lodash')
let moment = require('moment')
let Access = require('./enums/access')
/**
 * Collections should be described so that a user can discover characteristics of the collection, 
 * including scope, format, restrictions on access, ownership, and any information significant for 
 * determining the collection’s authenticity, integrity, and interpretation. 
 */
class Metadata {
    constructor(meta) {
        this.setStartDate(meta.startDate);
        this.setEndDate(meta.endDate);
        this.setName(meta.name);
        this.setAccess(meta.access);
        this.description = meta.description;
        this.userId = meta.userId;        
        this.createdAt = new Date().getTime();
    }    
    validateDate(date) {
        if (_.isUndefined(date) || !moment(date, moment.ISO_8601).isValid()) {
            throw `Invalid date ${date}`;
        }
    }
    setStartDate(date) {
        this.validateDate(date);
        this.startDate = date;
    }
    setEndDate(date) {
        this.validateDate(date);
        this.endDate = date;
    }
    setName(name) {
        if (!name) {
            throw `Empty name ${name}`;
        }
        this.name = name;
    }
    setAccess(access) {
        if (!_.isInteger(access) && _.isUndefined(Access.properties[access])) {
            throw `Invalid access ${access}`;
        }
        this.access = access;
    }
}

module.exports = Metadata;