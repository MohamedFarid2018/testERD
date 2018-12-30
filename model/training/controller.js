const Controller = require('../../lib/controller');
const trainingFacade = require('./facade');

class TrainingController extends Controller {}

module.exports = new TrainingController(trainingFacade);
