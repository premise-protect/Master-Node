"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require("command-line-args");
var fs_1 = require("fs");
var mainDefinitions = [
    { name: 'command', defaultOption: true }
];
var mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });
var argv = mainOptions._unknown || [];
switch (mainOptions.command) {
    default:
        var configFilePath = __dirname + '/config.json';
        if (!fs_1.existsSync(configFilePath)) {
            fs_1.writeFileSync(configFilePath, JSON.stringify({ database: 'mysql' }));
        }
        console.log('Looking for file:' + __dirname + '/config.json');
        var config = JSON.parse(fs_1.readFileSync(configFilePath).toString());
        console.log(config);
        break;
}
