"use strict";
exports.__esModule = true;
var cote_1 = require("cote");
var authService = new cote_1.Responder({ name: 'Authentication Service' });
authService.on('authenticate', function (req, cb) {
    cb(null, { firstName: 'Ryan', lastName: 'Griffin' });
});
