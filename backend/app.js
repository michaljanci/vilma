const global = require("./module/globalFunction/globalFunction.js");
const motion = require("./module/motion-detect/motion-detect.js");
const lights = require("./module/controlOfLights/controlOfLights.js");
const switches = require("./module/switches/switches.js");
//const extender = require("./module/extender/extender.js");
//const LED = require("./module/PIRControlLed/PIRControlLed.js");
//const alarm = require("./module/PIRControlAlarm/PIRControlAlarm.js");
//const notification = require("./module/globalFunction/notification.js");
//const GPIO = require("./module/GPIO/GPIO.js")

const date = require("date-and-time");
const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const ip_address = "localhost";
const port = process.env.PORT || 8088;
const publicPath = path.join(__dirname, "../public");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  //console.log("User connected");

  socket.on("button update event", function(data) {
    switches.switchSelector(data.status.substr(2, 8), data.status.substr(0, 1));
  });

  socket.on("slider update event", function(data) {
    if (data.status.substr(0, 3) === "dim") {
      console.log(lights.dimInvert(data.status.substr(4, 4)));
      lights.LightDimmer(data.status.substr(3, 1), data.status.substr(4, 4));
    } else {
      console.log(data.status.substr(4, 7));
      lights.RGBLedColor(data.status.substr(3, 1), data.status.substr(4, 7));
    }
  });

  socket.on("disconnect", () => {
    //console.log("User was disconnected");
  });
});

server.listen(port, () => {});

// Banner
console.log("+--------------------------------------------+");
console.log("|              Server is up on               |");
console.log(`| Listening on http://${ip_address}:${port}         |`);
console.log(
  "| App start on: " +
    date.format(new Date(), "YYYY.MM.DD HH:mm:ss") +
    "          |"
);
console.log("+--------------------------------------------+");
console.log("");

motion.detect("PIR_1", 1);