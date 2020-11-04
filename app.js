const ping = require("ping");
// array in case more than one device needs to be used in future
const hosts = ["10.10.10.112"];
const main = require("./connection/emailConfig");

// iterates over each instance in hosts array
hosts.forEach(function (host) {
  ping.sys.probe(host, function (isAlive) {
    if (!isAlive) {
      console.log("Host at %s is unreachable", host);
      main().catch(console.error);
    } else {
      console.log("Host at %s is reachable", host);
    }
  });
});
