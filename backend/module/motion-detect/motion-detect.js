console.log("Import module: motion-detect.js");

const LED = require("../PIRControlLed/PIRControlLed.js");
const alarm = require("../PIRControlAlarm/PIRControlAlarm.js");
const global = require("../globalFunction/globalFunction.js");
const switches = require("../switches/switches.js");
const notification = require("../globalFunction/notification.js");

module.exports.detect = (input, value) => {
  if (value == 1) {
    console.log("");
    console.log("Motion Detect");
    console.log("+-------+");
    console.log("| " + input + " |");
    console.log("+-------+");
    LED.PIRControlLED(input, value);
    alarm.PIRControlAlarm(input, value);
    console.log("timeToShine = " + global.timeToShine());
    console.log("silentAlarm = " + switches.silentAlarm());
  } else {
    LED.PIRControlLED(input, value);
  }
};
