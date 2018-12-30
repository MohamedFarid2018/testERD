const Facade = require('../../lib/facade');
const NeedSchema = require('./schema').NeedSchema;

class NeedFacade extends Facade {}

module.exports = new NeedFacade('Need', NeedSchema);
