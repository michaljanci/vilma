console.log("Import module: globalFunctions.js");

const date = require("date-and-time");
const fs = require("fs");

module.exports.timeToShine = () => {
  // Sviti od 18:00 do 06:00
  var now = new Date();

  if (date.format(now, "H") >= 6 && date.format(now, "H") <= 18) {
    return false;
  } else {
    return true;
  }
};

module.exports.writeToFile = location => {
  var now = new Date();
  var text = location + " " + now;
  //fs.appendFile("./LOG/log.txt", text);
};

module.exports.pirStateLog = state => {
  var now = new Date();
  console.log(
    "PIR state is: " + state + " Time: " + date.format(now, "DD.MM HH:mm:ss.SS")
  );
};
