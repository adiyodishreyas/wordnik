#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .arguments('<word>')
    .option('def', 'Word Definitions')
    .option('syn', 'Word Synonyms')
    .option('ant', 'Word Antonyms')
    .option('ex', 'Word Examples')
    .option('dict', 'Word Full Dict')
    .option('play', 'Word Game')
    .action(function(word) {

        //maping the commands
        if( program.def ) {

        }
        else if( program.syn ) {

        }
        else if( program.ant ) {

        }
        else if( program.ex ) {

        }
        else if( program.dict ) {

        }
        else if( program.play ) {

        }
        else {

        }

        console.log(word);
    });

program.on('--help', function() {
    console.log('  Other Commands:')
    console.log( '    dict', '          Word of the day' );
});

program.parse(process.argv);


//word of the day command
if( !program.args.length ) {
    //console.log('Word of the day');
}
