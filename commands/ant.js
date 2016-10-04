

module.exports = function(word, client) {
    client.related(word, {type: 'antonym'}, function(error, antonyms) {
        if( error ) {
            return console.log('Something went wrong', error);
        }

        console.log(antonyms);
    });
};