console.log("Import module: notification.js");

const email = require("emailjs/email");
const Pushover = require("node-pushover");

var server = email.server.connect({
  user: "info@ittechnology.cz",
  password: "6CFtb0VrDJ",
  host: "email.active24.com",
  ssl: true
});

var push = new Pushover({
  token: "ah4pwc9y9ms6aafmuqcgg921nyvkja",
  user: "ug11kut1seetjm4qg4bpi9vhepi78d"
});

module.exports.pushoverSend = (location) => {
  // No callback function defined:
  //push.send("Vilma", "Schody");

  // A callback function is defined:
  push.send("*** Alarm ***", location, function(err, res) {
    if (err) {
      console.log("We have an error:");
      console.log(err);
      console.log(err.stack);
    } else {
      console.log("Message send successfully");
      console.log(res);
    }
  });
};

module.exports.sendMail = () => {
  // send the message and get a callback with an error or details of the message that was sent
  server.send(
    {
      text:
        "Jen jsem vám chtěla říct, že se někdo (asi babička) pohybuje po schodech...",
      from: "Vilma <tocenska@malina.cz>",
      to: "someone <janci@ittechnology.cz>",
      //cc: "else <michaela.janci@email.cz>",
      subject: "***** Alarm *****"
    },
    function(err, message) {
      console.log(err || message);
    }
  );
};
