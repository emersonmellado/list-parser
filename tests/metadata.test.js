"use strict"
let test = require('tape')
let Metadata = require('../src/metadata')
let MetadataModel = require('../src/models/MetadataModel')
let Access = require('../src/enums/access')

test('Create a metadata successfully', (assert) => {
    //let newMetadata = MetadataModel;

    assert.equal(MetadataModel.startDate, null);
    assert.equal(MetadataModel.endDate, null);
    assert.equal(MetadataModel.access, Access.Private);
    assert.end();
});


test('Create a metadata successfully', (assert) => {
    let emptyMetadata = MetadataModel;
    emptyMetadata.name = "My metadata";
    emptyMetadata.description = "My description";
    emptyMetadata.startDate = new Date();
    emptyMetadata.endDate = new Date();
    let newMetadata = new Metadata(emptyMetadata);

    assert.equal(typeof newMetadata.startDate, 'object');
    assert.equal(typeof newMetadata.endDate, 'object');
    assert.equal(newMetadata.name, 'My metadata');
    assert.equal(newMetadata.description, 'My description');
    assert.equal(newMetadata.access, Access.Private);
    assert.end();
});

test('Create a metadata will throw with invalid start date', (assert) => {
    let emptyMetadata = MetadataModel;
    assert.comment(JSON.stringify(MetadataModel));
    
    assert.throws(() => new Metadata(emptyMetadata), `Invalid date ${emptyMetadata.startDate}`);
    assert.end();
});

test('Create a metadata will throw with invalid end date', (assert) => {
    let emptyMetadata = MetadataModel;
    emptyMetadata.startDate = new Date();
    
    assert.throws(() => new Metadata(emptyMetadata), `Invalid date ${emptyMetadata.endDate}`);
    assert.end();
});