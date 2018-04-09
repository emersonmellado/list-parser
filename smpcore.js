/*
 * SMP.Core
 * https://github.com/emersonmellado/smp.core
 *
 * Copyright 2018, Emerson Mellado
 * Licenced under the MIT licence
 *
 */
'use strict';
(function () {

    var Stack = require('./src/stack');
    var Heap = require('./src/heap');
    var Pile = require('./src/pile');

    var smpcore = {
        stack: Stack,
        heap: Heap,
        pile: Pile
    };

    if (typeof module === "object" && module && typeof module.exports === "object") {
        //loaders that implement the Node module pattern (including browserify)
        module.exports = smpcore;
    } else {
        // Otherwise expose juration
        window.smpcore = smpcore;

        // Register as a named AMD module
        if (typeof define === "function" && define.amd) {
            define("smpcore", [], function () { return smpcore; });
        }
    }
})();