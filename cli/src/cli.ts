import * as commandLineArgs from 'command-line-args';

/* first - parse the main command */
const mainDefinitions = [
    { name: 'command', defaultOption: true }
]
const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
let argv = mainOptions._unknown || []

switch (mainOptions.command) {
    case 'setup':
        
        break;
    case 'create':
        const createDefinitions = [
            { name: 'target', defaultOption: true }
        ]
        const createOptions = commandLineArgs(createDefinitions, { argv, stopAtFirstUnknown: true })
        argv = createOptions._unknown || []

        switch (createOptions.target) {
            case 'user':
                console.log('Creating User')
                break;
            case 'token':
                console.log('Creating Token')
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