'use strict';
function whatsMyAgeAgain() {
  // if this is undefined, return 18
  // else, return this.age
  if (typeof(this) === 'undefined') {
    return 18;
  }
  else {
    return this.age;
  }
}

module.exports = whatsMyAgeAgain;
