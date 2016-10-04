/**
 * All the environment related settings are stored here
 */

var config = {};

if( process.env.NODE_ENV === 'production' ) {
    config.WORDNIK_API_KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
}

else {
    config.WORDNIK_API_KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
}

module.exports = config;