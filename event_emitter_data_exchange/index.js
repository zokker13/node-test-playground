'use strict';

const Emiitter = require('./libs/event_emitter');
const emitter = new Emiitter();

emitter.on('emitter', (data) => {

  console.log(`data: ${JSON.stringify(data.grab())}`);
});
emitter.grabInstance();
