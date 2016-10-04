#!/usr/bin/env node
var _ = require('underscore');
var program = require('commander');
var Wordnik = require('wordnik');
var config = require('./config');
var constants = require('./constants');
var CommandFunctionMap = require('./commands/index')();

var wnClient = new Wordnik({
    api_key : config.WORDNIK_API_KEY
});

var COMMANDS = constants.COMMANDS;

program
    .version('0.0.1')
    .arguments('<word>')
    .option(COMMANDS.DEF, 'Word Definitions')
    .option(COMMANDS.SYN, 'Word Synonyms')
    .option(COMMANDS.ANT, 'Word Antonyms')
    .option(COMMANDS.EX, 'Word Examples')
    .option(COMMANDS.DICT, 'Word Full Dict')
    .option(COMMANDS.PLAY, 'Word Game')
    .action(function(word) {

        var commandFound = false;

        _.each(COMMANDS, function(command, key, obj) {
            if( program[command] && CommandFunctionMap[command] ) {
                CommandFunctionMap[command](word, wnClient);
                commandFound = true;
            }
        });

        //if no command is found then run DICT command
        if( !commandFound ) {
            CommandFunctionMap[COMMANDS.DICT](word, wnClient);
        }

    });

program.on('--help', function() {
    console.log('  Other Commands:')
    console.log( '    dict', '          Word of the day' );
});

program.parse(process.argv);


//word of the day command
if( !program.args.length ) {
    CommandFunctionMap.wordOfTheDay(wnClient);
}
