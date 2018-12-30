const Controller = require('../../lib/controller');
const kbFacade = require('./facade');

class KbController extends Controller {}

module.exports = new KbController(kbFacade);
