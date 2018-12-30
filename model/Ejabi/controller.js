const Controller = require('../../lib/controller');
const ejabiFacade = require('./facade');

class EjabiController extends Controller {}

module.exports = new EjabiController(ejabiFacade);
