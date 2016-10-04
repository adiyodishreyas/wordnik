var dict = require('./dict');

module.exports = function(client) {
    client.wordOfTheDay(function(error, result) {
        if( error ) {
            return console.log('Something went wrong', error);
        }

        var wordOfTheDay = result.word;
        dict(wordOfTheDay, client);
    });
};