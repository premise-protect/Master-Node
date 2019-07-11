import * as commandLineArgs from 'command-line-args';
import * as readlineSync from 'readline-sync';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { pathToFileURL } from 'url';

const mainDefinitions = [
    { name: 'command', defaultOption: true }
]
const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
let argv = mainOptions._unknown || []

switch(mainOptions.command){
    default:
        let configFilePath = __dirname+'/config.json';
        if (!existsSync(configFilePath)){
            writeFileSync(configFilePath, JSON.stringify({database: 'mysql'}))
        }
        console.log('Looking for file:' + __dirname+'/config.json')
        let config = JSON.parse(readFileSync(configFilePath).toString());
        console.log(config);
        break
}