

module.exports = function(word, client) {
    client.examples(word, function(error, examples) {
        if( error ) {
            return console.log('Something went wrong', error);
        }

        console.log(examples);
    });
};