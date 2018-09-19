console.log("Import module: switches.js");

const extender = require("../extender/extender.js");

// declarations Switchs array
var arrButtonState = new Array();
arrButtonState[1] = 0; // [1] =  Silent Alarm
arrButtonState[2] = 0; // [2] =  LED White - switch corridor
arrButtonState[3] = 0; // [3] =  LED RGB   - switch Living room
arrButtonState[4] = 0; // [4] =  LED RGB   - switch corridor
arrButtonState[5] = 0; // [5] =  Bell
arrButtonState[6] = 0; // [6] =  LED bathroom
arrButtonState[7] = 0; // [7] =  reserve

// declarations Dimmer array
var arrDimmerState = new Array();
arrDimmerState[1] = 0; // [1] =  LED White - switch Living room
arrDimmerState[2] = 0; // [2] =  LED White - switch corridor
arrDimmerState[3] = 0; // [3] =  N/A
arrDimmerState[4] = 0; // [4] =  N/A
arrDimmerState[5] = 0; // [5] =  N/A
arrDimmerState[6] = 0; // [6] =  LED bathroom
arrDimmerState[7] = 0; // [7] =  reserve

function dimInvert(value) {
  // 0..100 -> 100 .. 0
  return Math.abs((value - 100) * -1);
}

function switchSync(index, input, value, description) {
  // funkce pro synchronizaci stisku GUI nebo tlacitek na zdi
  if (arrButtonState[index] == value) {
    arrButtonState[index] = 0;
    console.log(
      `Description: ${description} ${input} change to: ${arrButtonState[index]}`
    );
  } else {
    arrButtonState[index] = 1;
    console.log(
      `Description: ${description} ${input} change to: ${arrButtonState[index]}`
    );
  }
}

function switchSyncPlusDim(index, input, value, description) {
  // funkce pro synchronizaci stisku GUI nebo tlacitek na zdi
  if (arrButtonState[index] == value) {
    arrButtonState[index] = 0;
    console.log(
      `Description: ${description} ${input} change to: ${
        arrButtonState[index]
      } dimming level: ${arrDimmerState[index]}`
    );
  } else {
    arrButtonState[index] = 1;
    console.log(
      `Description: ${description} ${input} change to: ${
        arrButtonState[index]
      } dimming level: ${arrDimmerState[index]}`
    );
  }
}

function switchSyncPlusDimPlusInvert(index, input, value, description) {
  // funkce pro synchronizaci stisku GUI nebo tlacitek na zdi
  if (arrButtonState[index] == value) {
    arrButtonState[index] = 0;
    console.log(
      `Description: ${description} ${input} change to: ${
        arrButtonState[index]
      } dimming level: ${dimInvert(arrDimmerState[index])}`
    );
  } else {
    arrButtonState[index] = 1;
    console.log(
      `Description: ${description} ${input} change to: ${
        arrButtonState[index]
      } dimming level: ${dimInvert(arrDimmerState[index])}`
    );
  }
}

module.exports.silentAlarm = () => {
  if (arrButtonState[1] == true) {
    return true;
  } else {
    return false;
  }
};

module.exports.switchSelector = (input, state) => {
  // funkce, ktera identifikuje konkretni tlacitko a preda hodnotu funkci switchSync
  // input = nazev, state = 0, 1

  // Corridor
  // Silent Alarm
  // +---------------+
  // |   |   |   | X |
  // +---------------+
  if (input === "switch_1") {
    switchSync(1, input, state, "Silent Alarm");
  }
  // Corridor
  // Sleep
  // +---------------+
  // |   |   | X |   |
  // +---------------+
  if (input === "switch_2") {
    switchSync(2, input, state, "Sleep");
  }
  // Living room
  // LED RGB
  // +--------------------+
  // |   |   | X |   |    |
  // +--------------------+
  if (input === "switch_3") {
    switchSyncPlusDim(3, input, state, "LED RGB");
  }
  // Living room
  // LED White
  // +--------------------+
  // |   |   |   | x |    |
  // +--------------------+
  if (input === "switch_4") {
    switchSyncPlusDim(4, input, state, "LED White");
  }
  // Living room
  // Bell
  // +--------------------+
  // |   |   |   |   | x  |
  // +--------------------+
  if (input === "switch_5") {
    switchSync(5, input, state, "Bell");
  }
  // Bathroom
  // LED 1
  // +---------------+
  // |   |   | x |   |
  // +---------------+
  if (input === "switch_6") {
    switchSyncPlusDim(6, input, state, "LED bathroom 1 - Michal");
  }
  // Bathroom
  // LED 2
  // +---------------+
  // |   |   |   | x |
  // +---------------+
  if (input === "switch_7") {
    switchSyncPlusDim(7, input, state, "LED bathroom 2 - Michaela");
  }
  // Bathroom
  // LED 3
  // +---------------+
  // |   | x |   |   |
  // +---------------+
  if (input === "switch_8") {
    switchSyncPlusDim(8, input, state, "LED bathroom 3 - shower");
  }

  // reserve
  if (input === "switch_9") {
    switchSync(7, input, state);
  }

  // TMP corridor GUI Switches
  if (input === "switch_10") {
    extender.relayElko(1);
  }

  // TMP bathroom
  if (input === "switch_11") {
    extender.relayElko(2);
  }

  // TMP living room
  if (input === "switch_12") {
    extender.relayElko(3);
  }

  // TMP children room
  if (input === "switch_13") {
    extender.relayElko(4);
  }
};
