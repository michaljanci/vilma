console.log("Import module: PIRControlAlarm.js");

const global = require("../globalFunction/globalFunction.js");
const notification = require("../globalFunction/notification.js");
const switches = require("../switches/switches.js");

module.exports.PIRControlAlarm = (input, state) => {
  var action = switches.silentAlarm();

  if (action === true) {
    // stairs UP
    if (input === "PIR_1") {
      global.pirStateLog(state);
      notification.sendMail();
      notification.pushoverSend("Stairs UP");
      global.writeToFile("Stairs UP");
    }

    // stairs DOWN
    else if (input === "PIR_2") {
      global.pirStateLog(state);
      notification.sendMail();
      notification.pushoverSend("Stairs DOWN");
      global.writeToFile("Stairs DOWN");
    }

    // corridor
    else if (input === "PIR_3") {
      global.pirStateLog(state);
      notification.sendMail();
      notification.pushoverSend("Corridor");
      global.writeToFile("Corridor");
    }

    // bathroom
    else if (input === "PIR_4") {
      global.pirStateLog(state);
      notification.sendMail();
      notification.pushoverSend("Bathroom");
      global.writeToFile("Bathroom");
    }

    // living room
    else if (input === "PIR_5") {
      global.pirStateLog(state);
      notification.sendMail();
      notification.pushoverSend("Living room");
      global.writeToFile("Living room");
    }
  }
};
