
module.exports = function(word, client) {
    client.definitions(word, function(error, defs) {
        if( error ) {
            return console.log('Something went wrong', error);
        }

        console.log(defs);
    });
};