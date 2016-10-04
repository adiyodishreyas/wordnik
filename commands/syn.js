

module.exports = function(word, client) {
    client.related(word, {type: 'synonym'}, function(error, synonyms) {
        if( error ) {
            return console.log('Something went wrong', error);
        }

        console.log(synonyms);
    });
};