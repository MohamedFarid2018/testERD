const Facade = require('../../lib/facade');
const kbSchema = require('./schema').kbSchema;

class PassengersFacade extends Facade {}

module.exports = new PassengersFacade('kb', kbSchema);
