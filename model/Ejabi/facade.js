const Facade = require('../../lib/facade');
const ejabiSchema = require('./schema').EjabiSchema;

class EjabiFacade extends Facade {}

module.exports = new EjabiFacade('Ejabi', ejabiSchema);
