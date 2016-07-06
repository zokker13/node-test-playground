'use strict';

const EventEmitter = require('events').EventEmitter;
const singleInstance = require('./single_instance');

class Emitter extends EventEmitter {
  constructor() {
    super();
  }

  grabInstance(cb) {

    this.emit('emitter', singleInstance);
  }
}

module.exports = Emitter;
