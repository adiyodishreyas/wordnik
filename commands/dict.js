var def = require('./def');
var syn = require('./syn');
var ant = require('./ant');
var ex = require('./ex');

module.exports = function(word, client) {
    def(word, client);
    syn(word, client);
    ant(word, client);
    ex(word, client);
};