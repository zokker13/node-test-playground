'use strict';

class SingleInstance {
  
  grab() {
    return {
      number: 42
    };
  }
}

const singleInstance = new SingleInstance();

module.exports = singleInstance;
