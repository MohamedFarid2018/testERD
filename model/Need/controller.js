const Controller = require('../../lib/controller');
const needFacade = require('./facade');

class NeedController extends Controller {}

module.exports = new NeedController(needFacade);
