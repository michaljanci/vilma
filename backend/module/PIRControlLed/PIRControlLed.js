console.log("Import module: PIRControlLed.js");

const extender = require("../extender/extender.js");
const global = require("../globalFunction/globalFunction.js");

module.exports.PIRControlLED = (input, state) => {
  var action = global.timeToShine();

  if (action === true) {
    // stairs UP.
    if (input === "PIR_1") {
      global.pirStateLog(state);
      extender.builtInLEDs(6, state);
    }

    // stairs DOWN
    else if (input === "PIR_2") {
      global.pirStateLog(state);
      extender.builtInLEDs(6, state);
    }

    // corridor
    else if (input === "PIR_3") {
      global.pirStateLog(state);
      extender.builtInLEDs(5);
    }

    // bathroom
    else if (input === "PIR_4") {
      global.pirStateLog(state);
      extender.builtInLEDs(7);
    }

    // living room
    else if (input === "PIR_5") {
      global.pirStateLog(state);
    }
  }
};
