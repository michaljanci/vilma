console.log("Import module: extender.js");

const iopi = require("iopi/iopi.js");
const rpio = require("rpio");
const date = require("date-and-time");

const switches = require("../switches/switches.js");

const bus1 = new iopi(0x20);
const bus2 = new iopi(0x21);
var detectPressSwitchs = setInterval(detectPressSwitch, 200);

bus1.setPortDirection(0, 0xff); // pins 1 to 8,  direction - 1 = input
bus1.setPortDirection(1, 0xff); // pins 9 to 16, direction - 1 = input
bus1.setPortPullups(0, 0xff); //   pins 1 to 8,  pullups       = enabled
bus1.invertPort(0, 0xff); //       pins 9 to 16, polarity - 1  = inverted logic state of the input pin

bus2.setPortDirection(0, 0x00); // pins 1 to 8,  direction - 0 = output
bus2.writePort(0, 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////   START  switchs     ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function detectPressSwitch() {
  // Cyklus, ktery sleduje stisk tlacitek na stene. Interval je 200ms

  if (bus1.readPin(1) == 1) {
    pressButton("switch_1", bus1.readPin(1));
    sleep.msleep(200);
  }
 
  if (bus1.readPin(2) == 1) {
    pressButton("switch_2", bus1.readPin(2));
    sleep.msleep(200);
  }

  if (bus1.readPin(3) == 1) {
    pressButton("switch_3", bus1.readPin(3));
    sleep.msleep(200);
  }

  if (bus1.readPin(4) == 1) {
    pressButton("switch_4", bus1.readPin(4));
    sleep.msleep(200);
  }

  if (bus1.readPin(5) == 1) {
    pressButton("switch_5", bus1.readPin(5));
    sleep.msleep(200);
  }
  
  if (bus1.readPin(6) == 1) {
    pressButton("switch_6", bus1.readPin(6));
    sleep.msleep(200);
  }

 
  if (bus1.readPin(7) == 1) {
    pressButton("switch_7", bus1.readPin(7));
    sleep.msleep(200);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////    END  switchs     ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pressButton(input, value) {
  var now = new Date();
  console.log("");
  console.log("Press Button at: " + date.format(now, "DD.MM HH:mm:ss.SS"));
  console.log("+----------+");
  console.log("| " + input + " |");
  console.log("+----------+");
  //pressANDholdButton(input,value);
  switches.switchSelector(input, value);
}

function pressANDholdButton(input, value) {
  console.log("");
  console.log("Press and Hold Button");
  console.log("+------------+");
  console.log("| " + input + " " + value + " |");
  console.log("+------------+");
  // TODO
}

function releaseButton(input, value) {
  console.log("");
  console.log("Release Button");
  console.log("+------------+");
  console.log("| " + input + " " + value + " |");
  console.log("+------------+");
  switches.switchSelector(input, value);
}

module.exports.builtInLEDs = (index, value) => {
  // schodistove lED osvetleni - doba sviceni je nastavena na PIR detektoru.
  // PIR vraci hodnotu true, false. Rizeni vystupu pres i2c extender je invertovany. 0 = sviti, 1 = nesviti
  if (value == 1) {
    bus2.writePin(index, 0);
  } else {
    bus2.writePin(index, 1);
  }
};

module.exports.relayElko = index => {
  bus2.writePin(index, 0);
  msleep(500);
  bus2.writePin(index, 1);
};
