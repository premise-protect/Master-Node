"use strict";
exports.__esModule = true;
var commandLineArgs = require("command-line-args");
/* first - parse the main command */
var mainDefinitions = [
    { name: 'command', defaultOption: true }
];
var mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });
var argv = mainOptions._unknown || [];
switch (mainOptions.command) {
    case 'create':
        var createDefinitions = [
            { name: 'target', defaultOption: true }
        ];
        var createOptions = commandLineArgs(createDefinitions, { argv: argv, stopAtFirstUnknown: true });
        argv = createOptions._unknown || [];
        switch (createOptions.target) {
            case 'user':
                console.log('Creating User');
                break;
            case 'token':
                console.log('Creating Token');
                break;
        }
        break;
    case 'start':
        console.log('Starting Premise Protect System');
        var fork = require('child_process').fork;
        console.log('Starting Auth Service');
        var authService = fork('../auth-service/index.js');
        console.log('Starting Demo Service');
        var demoService = fork('../demo-service/index.js');
        // console.log(authService);
        break;
}
