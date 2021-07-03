// nty.ts

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

//console.log(process.argv.slice(2));

const argv = yargs(hideBin(process.argv))
  .command({
    command: 'user_create',
    describe: 'Create a new user',
    builder: {
      name: {
        alias: 'n',
        type: 'string',
        description: 'first and family names of the new user',
        demand: true
      },
      birth_year: {
        alias: 'y',
        type: 'number',
        description: 'year of birth of the new user',
        demand: true
      },
      joining_date: {
        alias: 'j',
        description: 'date of joining the nty-group',
        demand: false
      }
    },
    handler: function(args) {
      console.log("calling user_create with " + JSON.stringify(args) + " ...");
    }
  })
  .command({
    command: 'user_list',
    describe: 'List users',
    builder: {
      pattern: {
        alias: 'p',
        description: 'name-pattern',
        demand: true
      },
    },
    handler: function() {
      console.log("calling user_list ...");
    }
  })
  .command({
    command: 'user_modify',
    describe: 'Modify a user',
    builder: {
      id: {
        description: 'user-id',
        demand: true
      },
    },
    handler: function() {
      console.log("calling user_modify ...");
    }
  })
  .command({
    command: 'user_delete',
    describe: 'Delete a user',
    builder: {
      id: {
        description: 'user-id',
        demand: true
      },
    },
    handler: function() {
      console.log("calling user_delete ...");
    }
  })
  .scriptName("nty")
  .version('0.9.8')
  .demandCommand(1, 1, 'You need one command before moving on')
  .strict(true)
  .argv;

//debugger;

console.log("end of nty.ts");
console.log(argv);

