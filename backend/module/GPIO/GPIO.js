console.log("Import module: GPIO.js");

const gpio = require("onoff").Gpio; //include onoff to interact with the GPIO
const piblaster = require("pi-blaster.js");

const global = require("../globalFunction/globalFunction.js");
const extender = require("../extender/extender.js");
const motion = require("../motion-detect/motion-detect.js");

//declarations GPIO pin as input
const pirDetect1 = new gpio(10, "in", "both"), // - stairs UP
  //, pirDetect2 = new gpio(18, 'in', 'both')   // - stairs DOWN
  pirDetect3 = new gpio(17, "in", "both"), // - corridor
  pirDetect4 = new gpio(22, "in", "both"), // - bathroom
  pirDetect5 = new gpio(27, "in", "both"); // - living room

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////    START  PIRs     //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

pirDetect1.watch(function(err, value) {
  //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) {
    //if an error
    console.error("There was an error", err); //output error message to console
    return;
  }
  motion.detect("PIR_1", value);
});

pirDetect2.watch(function(err, value) {
  //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) {
    //if an error
    console.error("There was an error", err); //output error message to console
    return;
  }
  motion.detect("PIR_2", value);
});

pirDetect3.watch(function(err, value) {
  //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) {
    //if an error
    console.error("There was an error", err); //output error message to console
    return;
  }
  motion.detect("PIR_3", value);
});

pirDetect4.watch(function(err, value) {
  //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) {
    //if an error
    console.error("There was an error", err); //output error message to console
    return;
  }
  motion.detect("PIR_4", value);
});

pirDetect5.watch(function(err, value) {
  //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) {
    //if an error
    console.error("There was an error", err); //output error message to console
    return;
  }
  motion.detect("PIR_5", value);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////     END PIRs    ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
