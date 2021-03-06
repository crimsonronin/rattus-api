#!/usr/bin/env node
/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */
var db = require('../lib/utils/db');
var logger = require('../lib/utils/logger');
var csvImporter = require('../lib/managers/import');

if (!!process.argv[2]) {
    // init mongo connection
    db.connect().
    then(function() {
        logger.info('Importing csv');
        return csvImporter.import(process.argv[2]);
    }).
    then(function() {
        logger.info('Imported csv');
        process.exit(0);
    }).
    fail(function(err) {
        logger.error('Failed', err);
        process.exit(1);
    });
} else {
    logger.error('Failed: Missing import directory or file');
    process.exit(1);
}