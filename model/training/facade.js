const Facade = require('../../lib/facade');
const trainingSchema = require('./schema').trainingSchema;

class TrainingFacade extends Facade {}

module.exports = new TrainingFacade('training', trainingSchema);
